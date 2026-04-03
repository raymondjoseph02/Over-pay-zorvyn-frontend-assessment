import type { ReactNode } from "react";

interface AmountInputProps {
  icon: ReactNode;
  value: string;
  onChange: (raw: string) => void;
  label?: string;
  currency?: string;
}

export const AmountInput = ({
  icon,
  value,
  onChange,
  label = "Enter amount",
  currency = "$",
}: AmountInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, "");
    onChange(digits);
  };

  const displayAmount = value ? Number(value).toLocaleString("en-US") : "";

  return (
    <div className="rounded-2xl border border-primary-500 dark:bg-gray-800/40 bg-gray-50 px-5 pt-4 pb-5">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-500 mb-3 ">
        {label}
      </p>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center flex-1 min-w-0">
          <span className="text-3xl font-black dark:text-white text-gray-900">
            {currency}
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={displayAmount}
            onChange={handleChange}
            placeholder="0"
            className="text-3xl font-black dark:text-white text-gray-900 bg-transparent outline-none border-none w-full placeholder:text-gray-600 dark:placeholder:text-gray-600 caret-primary-500 ml-0.5"
          />
        </div>
        <div className="size-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};
