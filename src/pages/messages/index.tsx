import { MessageSquare, Send } from "lucide-react";
import { Header } from "../../components/global-ui";

const conversations = [
  { id: "1", name: "Alesia Karapova", message: "Payment dispute on invoice #INV-2024-001", time: "10:32 AM", unread: 2 },
  { id: "2", name: "Marcus Webb", message: "When will my refund be processed?", time: "9:14 AM", unread: 1 },
  { id: "3", name: "Support Team", message: "Transaction #TXN-789 has been flagged", time: "Yesterday", unread: 0 },
  { id: "4", name: "Finance Ops", message: "Monthly report is ready for review", time: "Mon", unread: 0 },
];

export const MessagesPage = () => {
  return (
    <>
      <Header title="Messages" />

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-primary-500" />
            <p className="text-sm font-bold text-gray-900 dark:text-gray-50">
              Inbox
            </p>
            <span className="text-xs font-black px-2 py-0.5 rounded-full bg-primary-500 text-white">
              3
            </span>
          </div>
          <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors cursor-pointer">
            <Send size={12} />
            Compose
          </button>
        </div>

        {/* Conversation list */}
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {conversations.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors"
            >
              {/* Avatar */}
              <div className="size-10 rounded-full bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-black text-primary-500">
                  {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className={`text-sm truncate ${c.unread > 0 ? "font-black text-gray-900 dark:text-white" : "font-semibold text-gray-700 dark:text-gray-300"}`}>
                    {c.name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{c.time}</p>
                </div>
                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <p className={`text-xs truncate ${c.unread > 0 ? "text-gray-700 dark:text-gray-300 font-medium" : "text-gray-400 dark:text-gray-500"}`}>
                    {c.message}
                  </p>
                  {c.unread > 0 && (
                    <span className="size-5 rounded-full bg-primary-500 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
