import { useModal } from "../../hooks/useModal";
import type { WalletActionProps } from "../../types/interface";
import { walletIcon } from "../../utility/iconMapper";
import { SendMoneyModal } from "../modals/SendMoneyModal";

export const WalletAction = ({ name, icon, action }: WalletActionProps) => {
  const Icon = walletIcon[icon];
  const { Modal: sendMoney, open } = useModal("lg", (close) => (
    <SendMoneyModal onClose={close} />
  ));

  const handleClick = () => {
    switch (action) {
      case "SEND":
        open();
        break;
      case "RECEIVE":
        console.log("receive");
        break;
      case "INVOICING":
        console.log("invoicing");
        break;
      case "MORE":
        console.log("more");
        break;
      default:
        break;
    }
  };
  const iconColor = () => {
    switch (action) {
      case "SEND":
        return "text-purple";
      case "RECEIVE":
        return "text-success-base";

      case "INVOICING":
        return "text-warning-base";

      case "MORE":
        return "text-primary-400";

      default:
        break;
    }
  };

  return (
    <>
      <button onClick={handleClick} className="space-y-4 group cursor-pointer ">
        <div
          className={` ${iconColor()} group-hover:bg-gray-100 dark:group-hover:bg-gray-700 group-hover:border-gray-300 dark:group-hover:border-transparent group-hover:scale-105 transition-all ease-in-out duration-300 dark:bg-gray-800 rounded-xl px-4 pb-3.5 pt-4.75 border border-gray-200 dark:border-transparent`}
        >
          <Icon />
        </div>
        <p className="dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-300 text-sm font-medium md:font-medium capitalize text-gray-600 transition-colors duration-300">
          {name}
        </p>
      </button>
      {sendMoney}
    </>
  );
};
