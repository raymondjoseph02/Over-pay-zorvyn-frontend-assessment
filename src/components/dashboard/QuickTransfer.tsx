import { Button } from "../global-ui";

export const QuickTransfer = () => {
  return (
    <div className="  py-6 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden h-fit">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-900 font-black text-lg leading-[135%] tracking-[0.2px] dark:text-gray-50">
          Quick Transfer
        </p>
      </div>
      <div></div>

      <div>
        <Button variants="primary">
          <span>Send Money</span>
        </Button>
      </div>
    </div>
  );
};
