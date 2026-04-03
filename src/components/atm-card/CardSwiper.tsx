import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AtmCardImage from "../../assets/img/atm-card.png";
import type { CardSwiperProps } from "../../types/interface";
import {
  cardVariants,
  indicatorVarVariants,
  swipeConfidenceThreshold,
  swipePower,
} from "../../animation";
import getCurrency from "../../utility/getCurrency";
import { Eye, EyeOff } from "lucide-react";

export const CardSwiper = ({
  cards,
  activeCard,
  setActiveCard,
}: CardSwiperProps) => {
  const [direction, setDirection] = useState(0);
  const [balanceHidden, setBalanceHidden] = useState(false);

  const activeIndex = cards.findIndex((c) => c.id === activeCard);

  const handleCardClick = (id: string) => {
    const newIndex = cards.findIndex((c) => c.id === id);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveCard(id);
  };

  const handleDragEnd = (
    _: never,
    { offset, velocity }: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold && activeIndex < cards.length - 1) {
      setDirection(1);
      setActiveCard(cards[activeIndex + 1].id);
    } else if (swipe > swipeConfidenceThreshold && activeIndex > 0) {
      setDirection(-1);
      setActiveCard(cards[activeIndex - 1].id);
    }
  };

  return (
    <div className=" h-fit!">
      <div className="relative h-fit w-fit overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {cards
            .filter((card) => card.id === activeCard)
            .map((card) => (
              <motion.div
                key={card.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                whileTap={{ cursor: "grabbing" }}
                onDragEnd={handleDragEnd}
              >
                <div className="absolute left-5.75 bottom-5.75 space-y-3.5">
                  <div className="flex items-center gap-3 text-gray-500">
                    <p className="text-xs ">Balance</p>
                    <button onClick={() => setBalanceHidden((p) => !p)}>
                      {balanceHidden ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className="text-xl font-black text-white">
                    {balanceHidden
                      ? "******"
                      : `${getCurrency({ currency: card.currency })} ${card.balance}`}
                  </p>
                </div>
                <img src={AtmCardImage} alt="" />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Card selector dots */}
      <div className="flex gap-1 mt-2 items-center justify-center">
        {cards.map((card) => (
          <motion.button
            key={card.id}
            variants={indicatorVarVariants}
            initial="initial"
            animate={activeCard === card.id ? "animate" : "initial"}
            onClick={() => handleCardClick(card.id)}
            className={`h-1 rounded-full ${activeCard === card.id ? " bg-secondary-500 dark:bg-white" : " bg-gray-200 dark:bg-gray-700"}`}
          />
        ))}
      </div>
    </div>
  );
};
