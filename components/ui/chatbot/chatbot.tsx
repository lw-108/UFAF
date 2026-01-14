"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Minimize2, Maximize2, GripHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatMessage from "./chat-message";
import { getBotAnswer } from "@/lib/chatbot-engine";

/* ================= TYPES ================= */

type Sender = "user" | "bot";

type Message = {
  id: number;
  text: string;
  sender: Sender;
  timestamp: string;
};

/* ================= HELPERS ================= */

const now = () => new Date().toISOString();

/* ================= INITIAL MESSAGE ================= */

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm the U-Fill Academy assistant. Ask me about courses, admissions, fees, or schedules.",
    sender: "bot",
    timestamp: now(),
  },
];

/* ================= CHATBOT ================= */

export default function Chatbot() {
  /* ---------- STATE ---------- */
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHeight, setChatHeight] = useState(560);

  /* ---------- REFS ---------- */
  const isResizing = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  /* ---------- RESIZE LOGIC ---------- */
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

  /* ---------- SEND MESSAGE ---------- */
  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userText = input;

    const userMessage: Message = {
      id: Date.now(),
      text: userText,
      sender: "user",
      timestamp: now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotAnswer(userText),
        sender: "bot",
        timestamp: now(),
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
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-3 transition rounded-full shadow-lg hover:scale-105"
            aria-label="Open chat assistant"
          >
            <img
              src="/u-robo.png"
              alt="U-Fill Chat Assistant"
              className="object-cover w-20 h-20 rounded-full"
            />

            <span className="absolute w-3 h-3 rounded-full bg-primary -top-1 -right-1 animate-pulse" />
          </button>

          <div className="pointer-events-none absolute bottom-full right-1/2 translate-x-1/2 mb-3 whitespace-nowrap rounded-lg bg-background border shadow-md px-3 py-1.5 text-sm text-foreground opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            💬 Need help? Chat with us
          </div>
        </div>
      </div>
    );
  }

  /* ================= CHAT WINDOW ================= */

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col",
        "bottom-4 right-4 sm:bottom-6 sm:right-6",
        "w-[calc(100vw-2rem)] sm:w-95 md:w-150 lg:w-96",
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
          {/* Resize Handle */}
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
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
