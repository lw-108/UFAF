"use client";

import React, { useState, useRef, useEffect } from "react";

/* ================= TYPES ================= */

type Sender = "user" | "bot";

type Message = {
  id: number;
  text: string;
  sender: Sender;
  timestamp: string;
};

/* ================= STATIC QA ================= */

const chatbotQAs = [
  {
    questions: ["course", "courses"],
    answer:
      "We offer Full Stack Development, Data Science, UI/UX, and Digital Marketing courses.",
  },
  {
    questions: ["fees", "fee"],
    answer:
      "Course fees range from ₹25,000 to ₹85,000. EMI options are available.",
  },
  {
    questions: ["admission", "admissions"],
    answer:
      "Admissions are open year-round. You can apply online or visit our campus.",
  },
  {
    questions: ["schedule", "timing", "batch"],
    answer:
      "We have morning, afternoon, and evening batches on weekdays and weekends.",
  },
  {
    questions: ["placement", "placements", "job"],
    answer:
      "We provide placement assistance with a 90%+ placement success rate.",
  },
];

/* ================= COMPONENT ================= */

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text:
        "Hi 👋 Ask me about courses, fees, admissions, schedules, or placements.",
      sender: "bot",
      timestamp: new Date().toISOString(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  /* ================= BOT LOGIC ================= */

  const getBotResponse = (text: string): string => {
    const normalized = text.toLowerCase();

    const match = chatbotQAs.find((qa) =>
      qa.questions.some((q) => normalized.includes(q))
    );

    return (
      match?.answer ||
      "I'm not sure about that yet. You can ask about courses, fees, admissions, schedules, or placements."
    );
  };

  /* ================= SEND ================= */

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(userMessage.text),
        sender: "bot",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 600);
  };

  /* ================= UI ================= */

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed z-50 text-white transition bg-blue-600 rounded-full shadow-lg bottom-5 right-5 h-14 w-14 hover:scale-105"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[92vw] max-w-sm h-[520px] bg-background border rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 font-semibold border-b">
            Admissions Assistant
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm opacity-60 hover:opacity-100"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}

            {isLoading && (
              <div className="text-xs text-muted-foreground">Typing…</div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question…"
              className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ================= MESSAGE ================= */

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-muted text-foreground"
        }`}
      >
        {message.text}
        <div className="mt-1 text-[10px] opacity-70">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
