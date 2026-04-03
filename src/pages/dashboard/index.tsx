import { useEffect, useState } from "react";
import {
  CashBackBanner,
  SavingsList,
  RecentActivities,
  Statistics,
  WalletWidget,
} from "../../components/dashboard";
import { Header } from "../../components/global-ui";
import { MoneyFlowChart, SpendingBarChart } from "../../components/charts";
import {
  CashbackBannerSkeleton,
  WalletWidgetSkeleton,
  RecentActivitiesSkeleton,
  SavingsListSkeleton,
  StatisticsSkeleton,
} from "../../components/global-ui";
import { useAuthStore } from "../../store/authStore";
import { adminSpendingHistory } from "../../data/dummy";

export const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuthStore();
  const isAdmin = currentUser.role === "admin";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header title="Dashboard" />

      <div className="flex flex-col-reverse lg:flex-row gap-4">
        {/* Left column */}
        <div className="flex flex-col flex-1 max-w-178.25 gap-6">
          <div className="hidden lg:flex h-fit">
            {loading ? (
              <CashbackBannerSkeleton />
            ) : isAdmin ? (
              <div className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-5 py-4">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-50 mb-1">
                  Platform Monthly Spending
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                  Overall spending across all accounts
                </p>
                <SpendingBarChart history={adminSpendingHistory} />
              </div>
            ) : (
              <CashBackBanner />
            )}
          </div>
          {loading ? null : <MoneyFlowChart />}

          <div className="flex gap-6 flex-col md:flex-row">
            {loading ? <SavingsListSkeleton /> : <SavingsList />}
            {loading ? <StatisticsSkeleton /> : <Statistics />}
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4 xl:max-w-91.25 w-91.25">
          <div className="lg:hidden">
            {loading ? (
              <CashbackBannerSkeleton />
            ) : isAdmin ? (
              <div className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-5 py-4">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-50 mb-1">
                  Platform Monthly Spending
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                  Overall spending across all accounts
                </p>
                <SpendingBarChart history={adminSpendingHistory} />
              </div>
            ) : (
              <CashBackBanner />
            )}
          </div>

          {loading ? <WalletWidgetSkeleton /> : <WalletWidget />}
          {loading ? <RecentActivitiesSkeleton /> : <RecentActivities />}
        </div>
      </div>
    </>
  );
};
