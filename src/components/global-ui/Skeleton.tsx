export const CashbackBannerSkeleton = () => (
  <div className="py-6 px-5 rounded-xl w-full h-fit xl:p-8 bg-gray-200 dark:bg-gray-800 animate-pulse space-y-4 md:space-y-6">
    <div className="space-y-2">
      <div className="h-7 w-48 rounded-lg bg-gray-300 dark:bg-gray-700" />
      <div className="h-4 w-64 rounded-lg bg-gray-300 dark:bg-gray-700" />
    </div>
    <div className="h-9 w-32 rounded-xl bg-gray-300 dark:bg-gray-700" />
  </div>
);

export const WalletWidgetSkeleton = () => (
  <div className="py-6 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 h-fit animate-pulse">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <div className="h-5 w-16 rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
    </div>

    {/* Card */}
    <div className="w-full aspect-[1.586/1] rounded-2xl bg-gray-200 dark:bg-gray-700" />

    {/* Dots */}
    <div className="flex gap-1 mt-2 items-center justify-center">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-1 rounded-full bg-gray-200 dark:bg-gray-700 ${i === 1 ? "w-6" : "w-3"}`}
        />
      ))}
    </div>

    {/* Action buttons */}
    <div className="flex justify-between w-full items-center mx-auto mt-10 max-w-73.75">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="h-3 w-10 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  </div>
);

export const RecentActivitiesSkeleton = () => (
  <div className="py-6 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 h-fit md:px-6 animate-pulse">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <div className="h-5 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-12 rounded bg-gray-200 dark:bg-gray-700" />
    </div>

    {/* Activity rows */}
    <div className="flex flex-col gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="size-11 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 shrink-0" />
            <div className="space-y-1.5">
              <div className="h-3.5 w-24 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <div className="h-3.5 w-14 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const SavingsListSkeleton = () => (
  <div className="py-6 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 h-fit w-full animate-pulse">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <div className="h-5 w-16 rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-9 w-28 rounded-xl bg-gray-200 dark:bg-gray-700" />
    </div>

    {/* Card skeletons */}
    <div className="space-y-3.5">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0" />
              <div className="space-y-1.5">
                <div className="h-3.5 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-28 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
            <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  </div>
);

export const StatisticsSkeleton = () => (
  <div className="py-6 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 h-fit w-full animate-pulse">
    {/* Header */}
    <div className="flex justify-between items-center mb-4 md:mb-7.5">
      <div className="h-5 w-20 rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-8 w-20 rounded-lg bg-gray-200 dark:bg-gray-700" />
    </div>

    {/* Inner box */}
    <div className="px-5.5 py-6 bg-gray-100 dark:bg-gray-800 rounded-xl flex justify-between gap-y-3.5">
      {/* Donut circle */}
      <div className="size-[135px] rounded-full bg-gray-200 dark:bg-gray-700 shrink-0" />

      {/* Legend items */}
      <div className="space-y-3.5 flex flex-col justify-center">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="size-1.5 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0" />
            <div className="space-y-1">
              <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-2.5 w-12 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
