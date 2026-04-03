import type { ButtonProps } from "../../types/interface";

export const Button = ({
  variants,
  children,
  className,
  handleClick,
  isDisable,
}: ButtonProps) => {
  const getClasses = () => {
    switch (variants) {
      case "primary":
        return "bg-primary-500 text-white hover:bg-primary-500/90 focus:ring-primary-300 ";
      case "secondary":
        return "bg-white text-primary-500 hover:bg-secondary-600 active:bg-secondary-700 focus:ring-secondary-300 ";
      default:
        break;
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={isDisable}
      className={` ${getClasses()} ${className || ""}  transition ease-in-out duration-300 rounded-lg w-full p-2.5 cursor-pointer flex items-center justify-center gap-0.5 md:text-base font-black tracking-[0.2px] outline-0 ring-0  leading-[150%] `}
    >
      {children}
    </button>
  );
};
