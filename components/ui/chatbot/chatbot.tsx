"use client";

import { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  MessageCircle,
  Minimize2,
  Maximize2,
  GripVertical,
  GripHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ChatMessage from "./chat-message";
import { getBotAnswer } from "@/lib/chatbot-engine";

/* ================= TYPES (FIX) ================= */

type Sender = "user" | "bot";

type Message = {
  id: number;
  text: string;
  sender: Sender;
  timestamp: string;
};

/* ================= INITIAL MESSAGE ================= */

const initialMessages: Message[] = [
  {
    id: 1,
    text:
      "Hello! I'm the U-Fill Academy assistant. Ask me about courses, admissions, fees, or schedules.",
    sender: "bot",
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [chatHeight, setChatHeight] = useState(560);
  const isResizing = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  /* ================= RESIZE LOGIC ================= */

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const newHeight = window.innerHeight - e.clientY - 32;
      if (newHeight > 420 && newHeight < 800) {
        setChatHeight(newHeight);
      }
    };

    const stopResize = () => {
      isResizing.current = false;
      document.body.style.cursor = "default";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResize);
    };
  }, []);

  /* ================= SEND MESSAGE ================= */

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userText = input;

    const userMessage: Message = {
      id: Date.now(),
      text: userText,
      sender: "user", // ✅ strict union
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotAnswer(userText),
        sender: "bot", // ✅ strict union
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => setMessages(initialMessages);

  /* ================= FLOATING BUTTON ================= */

  if (!isOpen) {
    return (
      <div className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6">
        <button
          onClick={() => setIsOpen(true)}
          className="relative p-4 transition rounded-full shadow-lg bg-primary text-primary-foreground hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute w-3 h-3 bg-red-500 rounded-full -top-1 -right-1 animate-pulse" />
        </button>
      </div>
    );
  }

  /* ================= CHAT WINDOW ================= */

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col",
        "bottom-4 right-4 sm:bottom-6 sm:right-6",
        "w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px]",
        "max-h-[85svh]",
        "bg-background border rounded-2xl shadow-2xl transition-all",
        isMinimized && "h-12"
      )}
      style={!isMinimized ? { height: chatHeight } : {}}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-primary text-primary-foreground rounded-t-2xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold sm:text-base">
            U-Fill Assistant
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 rounded hover:bg-white/15"
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4" />
            ) : (
              <Minimize2 className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={clearChat}
            className="hidden px-2 py-1 text-xs rounded sm:block hover:bg-white/15"
          >
            Clear
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded hover:bg-white/15"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Resize handle */}
          <div
            className="items-center justify-center hidden h-2 border-b sm:flex cursor-ns-resize hover:bg-muted"
            onMouseDown={() => {
              isResizing.current = true;
              document.body.style.cursor = "ns-resize";
            }}
          >
            <GripHorizontal className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}

            {isLoading && (
              <div className="flex gap-1 text-muted-foreground">
                <span className="w-2 h-2 bg-current rounded-full animate-pulse" />
                <span className="w-2 h-2 delay-150 bg-current rounded-full animate-pulse" />
                <span className="w-2 h-2 delay-300 bg-current rounded-full animate-pulse" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about courses, fees, admissions…"
                className="w-full px-2 py-2.5 pr-12 text-sm border rounded-xl resize-none focus:ring-2 focus:ring-primary focus:outline-none"
                rows={2}
                disabled={isLoading}
              />

              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute p-2 rounded-full right-2 bottom-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                <Send className="w-4 h-4 py-0.7 mt-0.2" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
