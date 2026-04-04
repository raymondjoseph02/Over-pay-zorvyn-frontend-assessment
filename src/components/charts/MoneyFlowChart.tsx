import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";
import DropDownSelect from "../global-ui/DropDownSelect";

const weeklyData: Record<
  string,
  { date: string; income: number; expenses: number }[]
> = {
  "Jan 10 - Jan 16": [
    { date: "Jan 10", income: 3200, expenses: 6800 },
    { date: "Jan 11", income: 4800, expenses: 5200 },
    { date: "Jan 12", income: 5052, expenses: 4800 },
    { date: "Jan 13", income: 7200, expenses: 6500 },
    { date: "Jan 14", income: 2800, expenses: 6100 },
    { date: "Jan 15", income: 5000, expenses: 4200 },
    { date: "Jan 16", income: 7100, expenses: 2900 },
  ],
  "Jan 17 - Jan 23": [
    { date: "Jan 17", income: 4100, expenses: 5300 },
    { date: "Jan 18", income: 6200, expenses: 3800 },
    { date: "Jan 19", income: 3500, expenses: 7100 },
    { date: "Jan 20", income: 8000, expenses: 4500 },
    { date: "Jan 21", income: 5500, expenses: 6000 },
    { date: "Jan 22", income: 4200, expenses: 3200 },
    { date: "Jan 23", income: 6800, expenses: 5100 },
  ],
  "Jan 24 - Jan 30": [
    { date: "Jan 24", income: 5900, expenses: 4400 },
    { date: "Jan 25", income: 3100, expenses: 6700 },
    { date: "Jan 26", income: 7400, expenses: 3900 },
    { date: "Jan 27", income: 4600, expenses: 5800 },
    { date: "Jan 28", income: 6300, expenses: 4100 },
    { date: "Jan 29", income: 2900, expenses: 7300 },
    { date: "Jan 30", income: 7800, expenses: 3600 },
  ],
};

const ranges = Object.keys(weeklyData);
const opt = ranges.map((r) => ({ label: r, value: r }));

const formatY = (value: number) => {
  if (value === 0) return "0k";
  return `${value / 1000}k`;
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value?: number }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-lg">
        ${payload[0].value?.toLocaleString()}
      </div>
      <div className="w-3 h-3 rounded-full border-2 border-primary-500 bg-white dark:bg-gray-900" />
      <p className="text-xs font-black text-gray-900 dark:text-white">
        {label}
      </p>
    </div>
  );
};

export const MoneyFlowChart = () => {
  const [selectedRange, setSelectedRange] = useState(ranges[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const gridColor = isDark ? "#1f2937" : "#f3f4f6";
  const axisColor = isDark ? "#6b7280" : "#9ca3af";
  const expensesColor = isDark ? "#4b5563" : "#d1d5db";

  const data = weeklyData[selectedRange];

  return (
    <div className="py-6 px-4 md:px-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full h-fit">
      {/* Header */}
      <div className="flex flex-wrap flex-col sm:flex-row md:items-center justify-between gap-3 mb-6 items-start">
        <p className="text-gray-900 font-black text-lg leading-[135%] tracking-[0.2px] dark:text-gray-50">
          Money Flow
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          {/* Legend */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-1 rounded-full bg-primary-500" />
              <span className="text-xs font-semibold text-gray-900 dark:text-gray-400">
                Income
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-1 rounded-full bg-gray-900 dark:bg-gray-50" />
              <span className="text-xs font-semibold text-gray-900 dark:text-gray-400">
                Expenses
              </span>
            </div>
          </div>

          {/* Range dropdown */}
          <DropDownSelect
            active={dropdownOpen}
            setActive={setDropdownOpen}
            selected={selectedRange}
            setSelected={setSelectedRange}
            options={opt}
          />
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={240}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 10, left: -30, bottom: 0 }}
        >
          <CartesianGrid stroke={gridColor} vertical={true} horizontal={true} />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: axisColor }}
            axisLine={false}
            tickLine={false}
            dy={8}
            tickMargin={6}
          />
          <YAxis
            tickFormatter={formatY}
            tick={{ fontSize: 11, fill: axisColor }}
            axisLine={false}
            tickLine={false}
            domain={[0, 10000]}
            ticks={[0, 3000, 5000, 7000, 10000]}
            tickMargin={9}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="var(--color-primary-500)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 5,
              fill: "var(--color-primary-500)",
              strokeWidth: 0,
            }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke={expensesColor}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, fill: expensesColor, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
