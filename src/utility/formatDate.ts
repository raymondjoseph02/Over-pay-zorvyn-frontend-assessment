import type { FormatMode } from "../types/type";

export const formatDate = (
  input: string | Date,
  mode: FormatMode = "label",
): string => {
  const date = typeof input === "string" ? new Date(input) : input;

  if (isNaN(date.getTime())) return String(input);

  const now = new Date();
  const today = startOfDay(now);
  const target = startOfDay(date);
  const diffDays = Math.round(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const dateStr = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const relativeLabel = (() => {
    if (diffDays === 0) return "Today";
    if (diffDays === -1) return "Yesterday";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays > 1 && diffDays <= 6)
      return date.toLocaleDateString("en-US", { weekday: "long" });
    return dateStr;
  })();

  if (mode === "label") return relativeLabel;
  if (mode === "short") return `${relativeLabel} at ${timeStr}`;
  if (mode === "full") return `${dateStr} at ${timeStr}`;

  return relativeLabel;
};

/** Returns midnight of a given date (strips time component). */
const startOfDay = (date: Date): Date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

/**
 * Returns just the time portion of a date.
 * @example formatTime("2022-01-15T14:30:00") // "02:30 PM"
 */
export const formatTime = (input: string | Date): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  if (isNaN(date.getTime())) return String(input);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

/**
 * Returns how long ago a date was in human-readable form.
 * @example timeAgo("2022-01-15") // "3 days ago"
 */
export const timeAgo = (input: string | Date): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  if (isNaN(date.getTime())) return String(input);

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [604800, "week"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) return `${count} ${label}${count !== 1 ? "s" : ""} ago`;
  }

  return "just now";
};
