import { useMemo, useState } from "react";
import DropDownSelect from "../global-ui/DropDownSelect";
import { SavingsCard } from "./index";
import { savingsAccounts } from "../../data/dummy";
import { SavingsEmpty } from "../global-ui";

const opt = [
  { label: "Last 7 Days", value: "last-7-days" },
  { label: "Last 30 Days", value: "last-30-days" },
  { label: "Last 90 Days", value: "last-90-days" },
];

const rangeMap: Record<string, { from: number; to: number }> = {
  "last-7-days": { from: 7, to: 0 },
  "last-30-days": { from: 30, to: 7 },
  "last-90-days": { from: 90, to: 30 },
};

const daysAgo = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
};

export const SavingsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("last-7-days");

  const filtered = useMemo(() => {
    const { from, to } = rangeMap[selectedOption] ?? rangeMap["last-7-days"];
    const start = daysAgo(from);
    const end = daysAgo(to);
    return savingsAccounts.filter((account) => {
      const date = new Date(account.createdAt);
      return date >= start && date <= end;
    });
  }, [selectedOption]);

  return (
    <div className="py-6 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 h-fit w-full">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-900 font-black text-lg leading-[135%] tracking-[0.2px] dark:text-gray-50">
          Saving
        </p>
        <DropDownSelect
          active={isOpen}
          options={opt}
          selected={selectedOption}
          setActive={setIsOpen}
          setSelected={setSelectedOption}
        />
      </div>

      <div className="space-y-3.5">
        {filtered.length === 0 ? (
          <SavingsEmpty />
        ) : (
          filtered.map((account, index) => (
            <SavingsCard key={account.name + index} {...account} />
          ))
        )}
      </div>
    </div>
  );
};
