import type { WalletActionProps } from "../../types/interface";
import { walletIcon } from "../../utility/iconMapper";

export const WalletAction = ({ name, icon, action }: WalletActionProps) => {
  const Icon = walletIcon[icon];
  const handleClick = () => {
    switch (action) {
      case "SEND":
        console.log("send");
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
  return (
    <div>
      <button
        className="rounded-xl pt-4.25 pb-3.75 px-4 flex items-center justify-center dark:bg-gray-800"
        onClick={handleClick}
      >
        <Icon />
      </button>
      <p> {name}</p>
    </div>
  );
};
