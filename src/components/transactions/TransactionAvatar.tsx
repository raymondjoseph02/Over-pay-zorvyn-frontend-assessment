interface TransactionAvatarProps {
  imageUrl?: string;
  avatarInitial?: string;
  avatarColor?: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

export const TransactionAvatar = ({
  imageUrl,
  avatarInitial,
  avatarColor = "#194BFB",
  name,
  size = "md",
}: TransactionAvatarProps) => {
  const dim =
    size === "sm" ? "size-8" : size === "md" ? "size-10 " : "size-27.5";
  const text = size === "sm" ? "text-xs" : "text-sm";

  if (imageUrl) {
    return (
      <div
        className={`${dim} p-2 rounded-full border border-gray-200 dark:border-gray-700 flex items-center grow-0  justify-center shrink-0 overflow-hidden bg-white dark:bg-gray-800`}
      >
        <img src={imageUrl} alt={name} className=" object-contain" />
      </div>
    );
  }

  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center shrink-0 font-black ${text} text-white`}
      style={{ backgroundColor: avatarColor }}
    >
      {avatarInitial ?? name.charAt(0).toUpperCase()}
    </div>
  );
};
