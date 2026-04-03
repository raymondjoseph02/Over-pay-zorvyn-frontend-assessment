import { ChevronRight } from "lucide-react";
import { statistics } from "../../data/dummy";
import { DonutChart } from "../charts";
import { useTheme } from "../../context/ThemeContext";
import { StatisticsEmpty } from "../global-ui";

export const Statistics = () => {
  const { theme } = useTheme();
  const statsBgColor = {
    home: "bg-primary-500",
    shopping: "bg-gray-900",
    others: "dark:bg-gray-700 bg-gray-200",
  };
  const chartData = statistics.map((stat) => {
    return {
      label: stat.name,
      value: parseFloat(stat.value.replace(/,/g, "")),
      color: (() => {
        switch (stat.name.toLowerCase()) {
          case "shopping":
            return theme === "light" ? "#1A202C" : "#ffffff";
          case "home":
            return "#194BFB";
          case "others":
            return theme !== "light" ? "#2A313C" : "#EDF2F7";
          default:
            return "#cccccc";
        }
      })(),
    };
  });
  return (
    <div className="  py-6 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden h-fit w-full">
      <div className="flex justify-between items-center mb-4 md:mb-7.5">
        <p className="text-gray-900 font-black text-lg leading-[135%] tracking-[0.2px] dark:text-gray-50">
          Statistics
        </p>
        <button className="text-gray-600 hover:scale-105 duration-300 ease-in-out transition cursor-pointer dark:text-gray-600 font-semibold leading-[150%] tracking-[0.4px] text-xs bg-gray-50 flex gap-1 py-2 px-3 rounded-lg dark:bg-gray-800 items-center">
          <span> View all</span>
          <ChevronRight size={16} />
        </button>
      </div>
      {statistics.length === 0 ? (
        <StatisticsEmpty />
      ) : (
        <div className="px-5.5 py-6 dark:bg-gray-800 border dark:border-transparent border-gray-200 bg-gray-50 rounded-xl justify-between gap-y-3.5 flex">
          <DonutChart data={chartData} size={135} strokeWidth={25} />
          <div className="space-y-3.5">
            {statistics.map((stats, index) => {
              const key = stats.name.toLowerCase() as keyof typeof statsBgColor;
              const bgColor = statsBgColor[key] ?? "bg-gray-400";
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-1.5 rounded-full h-1.5 ${bgColor}`} />
                  <div className="space-y-1">
                    <p className="text-gray-900 leading-[150%] tracking-[0.4px] dark:text-white text-xs font-black">
                      {stats.name}
                    </p>
                    <p className="text-[0.625rem] font-medium dark:text-gray-500">
                      $ {stats.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
