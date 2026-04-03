import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";

interface SpendingBarChartProps {
  history: { month: string; value: number }[];
}

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
      <p className="text-xs font-black text-gray-900 dark:text-white">
        {label}
      </p>
    </div>
  );
};

export const SpendingBarChart = ({ history }: SpendingBarChartProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const gridColor = isDark ? "#1f2937" : "#f3f4f6";
  const axisColor = isDark ? "#6b7280" : "#9ca3af";
  const lastMonth = history[history.length - 1]?.month;

  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart
        data={history}
        margin={{ top: 10, right: 4, left: -10, bottom: 0 }}
        barCategoryGap="30%"
      >
        <CartesianGrid stroke={gridColor} vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 10, fill: axisColor }}
          axisLine={false}
          tickLine={false}
          dy={6}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {history.map((entry) => (
            <Cell
              key={entry.month}
              fill={
                entry.month === lastMonth
                  ? "var(--color-primary-500)"
                  : isDark
                    ? "#374151"
                    : "#bfdbfe"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
