import { motion } from "framer-motion";
import type { SavingsAccountProps } from "../../types/interface";
import { savingsIcon } from "../../utility/iconMapper";
import getCurrency from "../../utility/getCurrency";

export const SavingsCard = ({
  balance,
  currency,
  name,
  targetAmount,
  incomePercentage,
}: SavingsAccountProps) => {
  const progress = Math.min(
    (Number.parseFloat(balance) / Number.parseFloat(targetAmount)) * 100,
    100,
  );

  const IconComponent =
    name.toLowerCase() === "investment"
      ? savingsIcon["investment"]
      : savingsIcon["mutual fund"];

  const iconColor =
    name.toLowerCase() === "investment"
      ? "bg-[#F2FDF6] text-success-base dark:bg-gray-800 dark:text-success-base"
      : "text-purple bg-[#F4F0FF] dark:bg-gray-800 dark:text-purple";

  const progressColor =
    name.toLowerCase() === "investment" ? "bg-success-base " : " bg-purple  ";
  return (
    <div className="p-4 rounded-xl space-y-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between gap-3 ">
        <div className="flex items-center gap-3">
          <div
            className={`size-10 rounded-full ${iconColor} flex items-center justify-center shrink-0 text-primary-500`}
          >
            <IconComponent />
          </div>

          <div>
            <p className="text-sm font-black text-gray-900 dark:text-gray-50 leading-tight">
              {name}
            </p>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mt-0.5">
              Monthly income{" "}
              <span className="font-bold text-[0.625rem] leading-[150%]">
                {incomePercentage}%
              </span>
            </p>
          </div>
        </div>

        {/* Balance */}
        <p className="text-sm font-black text-gray-900 dark:text-gray-50 whitespace-nowrap">
          {getCurrency({ currency })}
          {balance}
        </p>
      </div>

      {/* Progress bar */}
      <div>
        <div className="relative h-1.5 rounded-full w-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            initial={{
              width: "0%",
            }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
            }}
            className={`absolute h-1.5 rounded-full ${progressColor} `}
          />
        </div>
      </div>
    </div>
  );
};
