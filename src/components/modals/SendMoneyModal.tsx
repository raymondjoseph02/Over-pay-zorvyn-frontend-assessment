import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../global-ui/Button";
import { AmountInput } from "../global-ui/AmountInput";
import { PaymentMethodCard } from "../global-ui/PaymentMethodCard";
import { ConfirmSendModal } from "./ConfirmSendModal";
import { contacts } from "../../data/contacts";
import { paymentMethods } from "../../data/paymentMethods";
import type { SendMoneyModalProps } from "../../types/interface";

export const SendMoneyModal = ({ onClose }: SendMoneyModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<string>("visa");
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -120 : 120,
      behavior: "smooth",
    });
  };

  const selectedContact = contacts.find((c) => c.id === selected) ?? null;

  if (step === 2) {
    return (
      <ConfirmSendModal
        onClose={onClose}
        onEdit={() => setStep(1)}
        amount={amount}
        selectedContact={selectedContact}
      />
    );
  }

  return (
    <div className="h-dvh md:h-fit pt-6 md:pt-0">
      <div className="flex items-end justify-end mb-8">
        <button
          onClick={onClose}
          className="w-fit h-fit text-primary-500 cursor-pointer"
        >
          <X />
        </button>
      </div>
      <div className="space-y-2 max-w-100 mx-auto">
        <p className="text-2xl font-extrabold dark:text-gray-50 text-gray-900 text-center leading-[130%] tracking-[0px]">
          Send Money
        </p>
        <p className="text-sm font-medium text-gray-600 text-center">
          Please enter user information that you want to send money and enter an
          amount
        </p>
      </div>
      <div>
        <div className="flex mb-6 mt-10 items-center justify-between">
          <p className="text-base font-black dark:text-gray-50 text-gray-900">
            Recent Contact
          </p>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => scroll("left")}
              className="dark:text-gray-600 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="dark:text-gray-600 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="flex gap-4 mb-8 items-start">
          {/* Add button */}
          <div className="gap-3 flex flex-col items-center w-fit shrink-0">
            <button className="size-14 rounded-full dark:bg-gray-800 text-gray-900 dark:text-white flex items-center justify-center bg-gray-100 cursor-pointer">
              <Plus />
            </button>
            <p className="dark:text-gray-500 font-medium text-sm text-gray-900">
              Add
            </p>
          </div>

          {/* Scrollable contact slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {contacts.map((contact) => {
              const isSelected = selected === contact.id;
              return (
                <button
                  key={contact.id}
                  onClick={() => setSelected(isSelected ? null : contact.id)}
                  className="gap-2 flex flex-col items-center w-fit shrink-0 outline-none cursor-pointer"
                >
                  <div
                    className={`size-14 rounded-full overflow-hidden border-2 transition-colors ${
                      isSelected ? "border-primary-500" : "border-transparent"
                    }`}
                  >
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <p
                    className={` text-xs transition-colors ${
                      isSelected
                        ? "text-primary-500 font-black"
                        : "dark:text-gray-500 font-medium text-gray-900"
                    }`}
                  >
                    {contact.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex mb-4 mt-6 items-center justify-between">
            <p className="text-base font-black dark:text-gray-50 text-gray-900">
              Choose Method
            </p>
            <button className="dark:text-gray-50 flex rounded-full h-8 px-3 dark:border-gray-700 border items-center gap-1 text-xs border-gray-200 text-gray-900 cursor-pointer">
              <span>Add</span>
              <Plus size={14} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-3 ">
            {paymentMethods.map((method) => (
              <PaymentMethodCard
                key={method.id}
                icon={method.icon}
                name={method.name}
                balance={method.balance}
                selected={selectedMethod === method.id}
                onSelect={() => setSelectedMethod(method.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 mb-6">
          <AmountInput
            value={amount}
            onChange={setAmount}
            icon={<span className="text-2xl leading-none">🇺🇸</span>}
          />
        </div>
      </div>

      <div className="w-full">
        <Button
          isDisable={!amount || !selected}
          variants="primary"
          handleClick={() => setStep(2)}
        >
          <div className="flex items-center justify-center">
            <span>Send Money</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
