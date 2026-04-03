import { Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export const ComingSoon = ({
  title,
  description = "We're building something great. Check back soon.",
}: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-[60vh] px-4">
      {/* Icon ring */}
      <div className="relative mb-6">
        <div className="size-20 rounded-full bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center">
          <Clock size={32} className="text-primary-500" />
        </div>
        {/* Decorative dots */}
        <div className="absolute -top-1 -right-1 size-3 rounded-full bg-primary-500/40" />
        <div className="absolute -bottom-1 -left-1 size-2 rounded-full bg-primary-500/20" />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-black text-gray-900 dark:text-gray-50 mb-2 tracking-tight">
        Coming Soon
      </h2>
      <p className="text-sm text-gray-400 dark:text-gray-500 font-medium text-center max-w-xs">
        {description}
      </p>

      {/* Page name tag */}
      <div className="mt-6 px-4 py-1.5 rounded-full border border-primary-200 dark:border-primary-500/20 bg-primary-50 dark:bg-primary-500/10">
        <span className="text-xs font-bold text-primary-500 capitalize">{title}</span>
      </div>
    </div>
  );
};
