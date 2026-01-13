import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: string;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <div className={cn(
      "flex gap-3 mb-4",
      isBot ? "" : "flex-row-reverse"
    )}>
      <div className={cn(
        "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center",
        isBot 
          ? "bg-transparent border broder-black dark:border-white" 
          : "bg-primary"
      )}>
        {isBot ? (
          <Bot className="w-4 h-4 text-white" />
        ) : (
          <User className="w-4 h-4 text-white" />
        )}
      </div>
      
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3",
        "transition-all duration-200",
        isBot 
          ? " bg-transparent border border-gray-200 dark:border-gray-700 text-black dark:text-white" 
          : "bg-primary text-white"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        <p className={cn(
          "text-xs mt-2 font-medium",
          isBot 
            ? "text-gray-500 dark:text-gray-400" 
            : "text-blue-200"
        )}>
          {message.timestamp}
        </p>
      </div>
    </div>
  );
}