import { ChevronLeft, ChevronRight, PenLine, Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./Button";
import { AmountInput } from "./AmountInput";
import { PaymentMethodCard } from "./PaymentMethodCard";
import DummyImage from "../../assets/img/user-profile.png";

const VisaIcon = () => (
  <span className="font-black text-base tracking-widest text-gray-900 italic">
    VISA
  </span>
);

const MastercardIcon = () => (
  <div className="relative flex items-center justify-center w-9 h-6">
    <div className="size-6 rounded-full bg-red-500 absolute left-0" />
    <div className="size-6 rounded-full bg-orange-400 absolute right-0 opacity-90" />
  </div>
);

const paymentMethods = [
  { id: "visa", name: "Visa", balance: "$24,098.00", icon: <VisaIcon /> },
  {
    id: "mc",
    name: "Mastercard",
    balance: "$14,111.00",
    icon: <MastercardIcon />,
  },
];

const contacts = [
  {
    id: 1,
    name: "Francene",
    image: DummyImage,
    email: "francene@mail.com",
    accountNumber: "OV100234567890",
  },
  {
    id: 2,
    name: "Marcus",
    image: DummyImage,
    email: "marcus@mail.com",
    accountNumber: "OV200345678901",
  },
  {
    id: 3,
    name: "Alesia",
    image: DummyImage,
    email: "alesia@mail.com",
    accountNumber: "OV300456789012",
  },
  {
    id: 4,
    name: "Jordan",
    image: DummyImage,
    email: "jordan@mail.com",
    accountNumber: "OV400567890123",
  },
  {
    id: 5,
    name: "Taylor",
    image: DummyImage,
    email: "taylor@mail.com",
    accountNumber: "OV500678901234",
  },
  {
    id: 6,
    name: "Riley",
    image: DummyImage,
    email: "riley@mail.com",
    accountNumber: "OV600789012345",
  },
];

const FEES = 20;

const arrivalDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

interface SendMoneyModalProps {
  onClose: () => void;
}

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
  const numericAmount = Number(amount) || 0;
  const converted = Math.max(0, numericAmount - FEES);

  if (step === 2) {
    return (
      <div className="h-dvh md:h-fit pt-6 md:pt-0">
        {/* Header */}
        <div className="flex items-end justify-end mb-8">
          <button
            onClick={onClose}
            className="w-fit h-fit text-primary-500 cursor-pointer"
          >
            <X />
          </button>
        </div>
        <div className="space-y-2 max-w-100 mx-auto mb-8">
          <p className="text-2xl font-extrabold dark:text-gray-50 text-gray-900 text-center leading-[130%]">
            Review detail of your transfer
          </p>
          <p className="text-sm font-medium text-gray-600 text-center">
            Please enter user information that you want to send money and enter
            an amount
          </p>
        </div>

        {/* Transfer details */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-base font-black dark:text-gray-50 text-gray-900">
              Transfer details
            </p>
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1.5 text-primary-500 text-sm font-medium cursor-pointer"
            >
              <PenLine size={14} />
              <span>Edit</span>
            </button>
          </div>

          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You send
              </p>
              <p className="text-sm font-bold text-primary-500">
                ${numericAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total fees
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                -${FEES.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Amount we'll convert
              </p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                ${converted.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Guarenteed rate (48 hours)
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                0.89765
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Should arrive
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                by {arrivalDate()}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-6" />

        {/* Recipient */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-base font-black dark:text-gray-50 text-gray-900">
              Recipient
            </p>
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1.5 text-primary-500 text-sm font-medium cursor-pointer"
            >
              <PenLine size={14} />
              <span>Edit</span>
            </button>
          </div>

          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {selectedContact?.name ?? "—"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                {selectedContact?.email ?? "—"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Account number
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                {selectedContact?.accountNumber ?? "—"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Button variants="primary" handleClick={onClose}>
            <div className="flex items-center justify-center">
              <span>Confirm and Send</span>
            </div>
          </Button>
        </div>
      </div>
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
                    className={`font-medium text-xs transition-colors ${
                      isSelected
                        ? "text-primary-500"
                        : "dark:text-gray-500 text-gray-900"
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
          <div className="flex flex-col md:flex-row gap-3">
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
        <Button variants="primary" handleClick={() => setStep(2)}>
          <div className="flex items-center justify-center">
            <span>Send Money</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
