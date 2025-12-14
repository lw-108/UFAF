// components/chatbot/message/Message.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Bot,
  User,
  GraduationCap,
  BookOpen,
  Building,
  HelpCircle,
  Clock,
  CheckCheck,
  AlertCircle,
  FileText,
  Calendar,
  DollarSign,
  MapPin,
  Users,
  Globe,
  Sparkles,
  ThumbsUp,
  Star,
  Lightbulb,
  Award
} from "lucide-react";
import { format } from "date-fns";

// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Types
export type MessageType = "text" | "quick-reply" | "info-card" | "action" | "success" | "warning" | "link" | "list";
export type SenderType = "user" | "bot" | "system";
export type MessageCategory = "admissions" | "academics" | "campus" | "general" | "finance" | "international";

export interface MessageProps {
  id: string;
  content: string;
  sender: SenderType;
  timestamp: Date;
  type?: MessageType;
  category?: MessageCategory;
  status?: "sent" | "delivered" | "read" | "error";
  metadata?: {
    title?: string;
    subtitle?: string;
    items?: string[];
    link?: {
      url: string;
      text: string;
    };
    actions?: Array<{
      label: string;
      action: () => void;
      variant?: "default" | "outline" | "secondary";
    }>;
    icon?: keyof typeof iconMap;
  };
  className?: string;
  onActionClick?: (actionId: string) => void;
  showTimestamp?: boolean;
  showStatus?: boolean;
  animate?: boolean;
}

// Icon mapping
const iconMap = {
  bot: Bot,
  user: User,
  graduation: GraduationCap,
  book: BookOpen,
  building: Building,
  help: HelpCircle,
  file: FileText,
  calendar: Calendar,
  dollar: DollarSign,
  location: MapPin,
  users: Users,
  globe: Globe,
  sparkles: Sparkles,
  thumbsup: ThumbsUp,
  star: Star,
  lightbulb: Lightbulb,
  award: Award
} as const;

const categoryStyles: Record<MessageCategory, { bg: string; text: string; icon: keyof typeof iconMap }> = {
  admissions: { bg: "bg-blue-100/30 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", icon: "graduation" },
  academics: { bg: "bg-purple-100/30 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", icon: "book" },
  campus: { bg: "bg-emerald-100/30 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", icon: "building" },
  general: { bg: "bg-gray-100/30 dark:bg-gray-800/20", text: "text-gray-700 dark:text-gray-300", icon: "help" },
  finance: { bg: "bg-amber-100/30 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", icon: "dollar" },
  international: { bg: "bg-rose-100/30 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", icon: "globe" }
};

const typeStyles: Record<MessageType, { container: string; bubble: string }> = {
  text: { 
    container: "", 
    bubble: "rounded-2xl px-4 py-3 shadow-sm" 
  },
  "quick-reply": { 
    container: "space-y-3", 
    bubble: "rounded-2xl px-4 py-3 border-2 border-dashed shadow-sm" 
  },
  "info-card": { 
    container: "", 
    bubble: "rounded-xl p-0 overflow-hidden shadow-md border" 
  },
  action: { 
    container: "space-y-3", 
    bubble: "rounded-2xl px-4 py-3 shadow-sm border" 
  },
  success: { 
    container: "", 
    bubble: "rounded-2xl px-4 py-3 shadow-sm border border-emerald-200 dark:border-emerald-800" 
  },
  warning: { 
    container: "", 
    bubble: "rounded-2xl px-4 py-3 shadow-sm border border-amber-200 dark:border-amber-800" 
  },
  link: { 
    container: "", 
    bubble: "rounded-2xl px-4 py-3 shadow-sm border border-blue-200 dark:border-blue-800" 
  },
  list: { 
    container: "", 
    bubble: "rounded-2xl px-4 py-3 shadow-sm" 
  }
};

// Status icon component
const StatusIcon = ({ status }: { status: MessageProps['status'] }) => {
  if (!status || status === 'sent') return null;
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center">
            {status === 'delivered' && <CheckCheck className="w-3 h-3 text-blue-500" />}
            {status === 'read' && <CheckCheck className="w-3 h-3 text-emerald-500" />}
            {status === 'error' && <AlertCircle className="w-3 h-3 text-rose-500" />}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs capitalize">{status}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Sender avatar component
const SenderAvatar = ({ sender, category }: { sender: SenderType; category?: MessageCategory }) => {
  const getAvatarProps = () => {
    switch (sender) {
      case 'user':
        return {
          className: "border-2 border-blue-500 bg-blue-100 dark:bg-blue-900",
          fallback: <User className="w-4 h-4 text-blue-600 dark:text-blue-300" />,
          src: undefined
        };
      case 'bot':
        const categoryStyle = category ? categoryStyles[category] : null;
        return {
          className: cn(
            "border-2",
            categoryStyle 
              ? `border-${categoryStyle.text.split('-')[1]}-500 bg-gradient-to-br from-${categoryStyle.text.split('-')[1]}-500 to-${categoryStyle.text.split('-')[1]}-600`
              : "border-purple-500 bg-gradient-to-br from-purple-500 to-pink-500"
          ),
          fallback: <Bot className="w-4 h-4 text-white" />,
          src: undefined
        };
      case 'system':
        return {
          className: "border-2 border-gray-500 bg-gray-100 dark:bg-gray-800",
          fallback: <HelpCircle className="w-4 h-4 text-gray-600 dark:text-gray-300" />,
          src: undefined
        };
    }
  };

  const props = getAvatarProps();

  return (
    <Avatar className={cn("h-8 w-8 shadow-sm", props.className)}>
      <AvatarImage src={props.src} />
      <AvatarFallback>{props.fallback}</AvatarFallback>
    </Avatar>
  );
};

// Message bubble component
const MessageBubble = ({ 
  content, 
  sender, 
  type = "text", 
  category,
  metadata,
  onActionClick 
}: Pick<MessageProps, 'content' | 'sender' | 'type' | 'category' | 'metadata' | 'onActionClick'>) => {
  const bubbleClass = cn(
    typeStyles[type].bubble,
    sender === 'user'
      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
      : cn(
          "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none",
          category && categoryStyles[category].bg
        ),
    type === 'quick-reply' && "border-blue-200 dark:border-blue-800",
    type === 'info-card' && "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
  );

  const renderContent = () => {
    switch (type) {
      case "info-card":
        return (
          <Card className="border-0 shadow-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                {metadata?.icon && (
                  <div className={cn(
                    "p-2 rounded-lg",
                    category ? categoryStyles[category].bg : "bg-blue-100 dark:bg-blue-900/30"
                  )}>
                    {React.createElement(iconMap[metadata.icon], {
                      className: cn("h-5 w-5", category ? categoryStyles[category].text : "text-blue-600 dark:text-blue-400")
                    })}
                  </div>
                )}
                <div className="flex-1">
                  {metadata?.title && (
                    <h4 className={cn("font-semibold mb-1", category ? categoryStyles[category].text : "")}>
                      {metadata.title}
                    </h4>
                  )}
                  {metadata?.subtitle && (
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{metadata.subtitle}</p>
                  )}
                  <p className="text-sm">{content}</p>
                  
                  {metadata?.items && (
                    <ul className="mt-3 space-y-1">
                      {metadata.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {metadata?.link && (
                    <a
                      href={metadata.link.url}
                      className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {metadata.link.text}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  
                  {metadata?.actions && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {metadata.actions.map((action, index) => (
                        <Button
                          key={index}
                          size="sm"
                          variant={action.variant || "outline"}
                          onClick={() => onActionClick?.(`action-${index}`)}
                          className={cn(
                            "text-xs",
                            category && "hover:bg-opacity-20 hover:" + categoryStyles[category].bg.split(' ')[0]
                          )}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case "quick-reply":
        return (
          <div className="space-y-3">
            <p>{content}</p>
            {metadata?.actions && (
              <div className="flex flex-wrap gap-2">
                {metadata.actions.map((action, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant={action.variant || "default"}
                    onClick={() => onActionClick?.(`quick-${index}`)}
                    className="text-xs"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        );

      case "list":
        return (
          <div className="space-y-2">
            <p>{content}</p>
            {metadata?.items && (
              <div className="space-y-1">
                {metadata.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50"
                  >
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {index + 1}.
                    </span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "link":
        return (
          <div className="space-y-2">
            <p>{content}</p>
            {metadata?.link && (
              <a
                href={metadata.link.url}
                className="inline-flex items-center justify-between w-full p-3 transition-colors rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  {metadata.link.text}
                </span>
                <svg className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
        );

      default:
        return <p className="whitespace-pre-wrap">{content}</p>;
    }
  };

  return (
    <div className={bubbleClass}>
      {renderContent()}
    </div>
  );
};

// Main Message component
export function Message({
  content,
  sender,
  timestamp,
  type = "text",
  category,
  status,
  metadata,
  className,
  onActionClick,
  showTimestamp = true,
  showStatus = true,
  animate = true
}: MessageProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animate]);

  return (
    <div
      className={cn(
        "flex gap-3",
        sender === "user" && "flex-row-reverse",
        animate && "transition-all duration-300",
        animate && (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
        className
      )}
    >
      {/* Avatar */}
      {sender !== "user" && (
        <SenderAvatar sender={sender} category={category} />
      )}

      {/* Message Container */}
      <div className={cn(
        "flex flex-col gap-1",
        typeStyles[type].container,
        sender === "user" ? "items-end" : "items-start",
        "max-w-[80%]"
      )}>
        {/* Message Bubble */}
        <MessageBubble
          content={content}
          sender={sender}
          type={type}
          category={category}
          metadata={metadata}
          onActionClick={onActionClick}
        />

        {/* Metadata */}
        <div className={cn(
          "flex items-center gap-2 text-xs",
          sender === "user" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
        )}>
          {/* Category Badge */}
          {category && sender !== "user" && (
            <Badge
              variant="outline"
              className={cn(
                "px-2 py-0.5 text-xs border-dashed",
                categoryStyles[category].text,
                categoryStyles[category].bg
              )}
            >
              <div className="flex items-center gap-1">
                {React.createElement(iconMap[categoryStyles[category].icon], { className: "h-3 w-3" })}
                <span className="capitalize">{category}</span>
              </div>
            </Badge>
          )}

          {/* Timestamp */}
          {showTimestamp && (
            <>
              <Clock className="w-3 h-3" />
              <time dateTime={timestamp.toISOString()}>
                {format(timestamp, 'hh:mm a')}
              </time>
            </>
          )}

          {/* Status */}
          {showStatus && sender === "user" && status && (
            <StatusIcon status={status} />
          )}
        </div>
      </div>

      {/* User Avatar */}
      {sender === "user" && (
        <SenderAvatar sender={sender} />
      )}
    </div>
  );
}

// Quick Reply Grid Component
export function QuickReplyGrid({
  replies,
  onSelect
}: {
  replies: Array<{ id: string; label: string; icon?: keyof typeof iconMap }>;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {replies.map((reply) => {
        const Icon = reply.icon ? iconMap[reply.icon] : Sparkles;
        return (
          <Button
            key={reply.id}
            variant="outline"
            size="sm"
            onClick={() => onSelect(reply.id)}
            className="h-auto py-2 px-3 justify-start text-left hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex items-center gap-2">
              <Icon className="w-3 h-3 text-blue-500 group-hover:text-blue-600 dark:text-blue-400" />
              <span className="text-xs truncate">{reply.label}</span>
            </div>
          </Button>
        );
      })}
    </div>
  );
}

// Typing Indicator Component
export function TypingIndicator({ 
  variant = "dots",
  size = "sm" 
}: { 
  variant?: "dots" | "pulse";
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4"
  };

  if (variant === "dots") {
    return (
      <div className="flex items-center gap-1">
        <div className={cn("rounded-full bg-gray-400 animate-bounce", sizeClasses[size])} />
        <div className={cn("rounded-full bg-gray-400 animate-bounce delay-150", sizeClasses[size])} />
        <div className={cn("rounded-full bg-gray-400 animate-bounce delay-300", sizeClasses[size])} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        "rounded-full bg-gradient-to-r from-blue-500 to-purple-500",
        sizeClasses[size],
        "animate-pulse"
      )} />
      <span className="text-xs text-gray-500">AI is thinking...</span>
    </div>
  );
}

// Message Group Component
export function MessageGroup({
  messages,
  className
}: {
  messages: MessageProps[];
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (messages.length === 1) {
    return <Message {...messages[0]} />;
  }

  return (
    <div className={cn("space-y-1", className)}>
      <Button
        variant="ghost"
        size="sm"
        className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : `Show ${messages.length} related messages`}
      </Button>
      
      {isExpanded ? (
        <div className="pl-8 space-y-4 border-l-2 border-gray-200 border-dashed dark:border-gray-800">
          {messages.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
        </div>
      ) : (
        <Message {...messages[0]} />
      )}
    </div>
  );
}

// Message Skeleton (Loading state)
export function MessageSkeleton({ 
  sender = "bot",
  type = "text"
}: {
  sender?: SenderType;
  type?: MessageType;
}) {
  return (
    <div className="flex gap-3 animate-pulse">
      {sender !== "user" && (
        <div className="w-8 h-8 bg-gray-200 rounded-full dark:bg-gray-700" />
      )}
      
      <div className="flex flex-col gap-2 max-w-[80%]">
        <div className={cn(
          "rounded-2xl px-4 py-3",
          sender === "user" 
            ? "bg-gray-200 dark:bg-gray-700 rounded-br-none ml-auto" 
            : "bg-gray-200 dark:bg-gray-700 rounded-bl-none",
          type === "info-card" && "p-0"
        )}>
          <div className="space-y-2">
            <div className="w-3/4 h-3 bg-gray-300 rounded dark:bg-gray-600" />
            <div className="w-1/2 h-3 bg-gray-300 rounded dark:bg-gray-600" />
          </div>
        </div>
        <div className="w-16 h-2 bg-gray-200 rounded dark:bg-gray-700" />
      </div>
      
      {sender === "user" && (
        <div className="w-8 h-8 bg-gray-200 rounded-full dark:bg-gray-700" />
      )}
    </div>
  );
}

// Hook for using messages
export function useMessages() {
  const [messages, setMessages] = React.useState<MessageProps[]>([]);

  const addMessage = (message: Omit<MessageProps, 'id' | 'timestamp'>) => {
    const newMessage: MessageProps = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const updateMessage = (id: string, updates: Partial<MessageProps>) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, ...updates } : msg
    ));
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    addMessage,
    updateMessage,
    clearMessages,
    setMessages
  };
}

// Example usage component
export function MessageExamples() {
  const { addMessage } = useMessages();

  const exampleMessages: Omit<MessageProps, 'id' | 'timestamp'>[] = [
    {
      content: "Welcome to Fill Academy! How can I assist you today?",
      sender: "bot",
      type: "text",
      category: "general",
      metadata: {
        icon: "sparkles",
        title: "Welcome Message"
      }
    },
    {
      content: "Here are the admission requirements for 2024:",
      sender: "bot",
      type: "list",
      category: "admissions",
      metadata: {
        title: "Admission Requirements",
        subtitle: "For Fall 2024 Intake",
        items: [
          "Completed application form",
          "Official transcripts",
          "2 Letters of recommendation",
          "Personal statement (500 words)",
          "English proficiency test (IELTS/TOEFL)"
        ]
      }
    },
    {
      content: "Need more information about campus facilities?",
      sender: "bot",
      type: "quick-reply",
      metadata: {
        actions: [
          { label: "Campus Tour", action: () => console.log("Tour") },
          { label: "Dormitories", action: () => console.log("Dorms") },
          { label: "Library", action: () => console.log("Library") }
        ]
      }
    },
    {
      content: "Check out our scholarship opportunities!",
      sender: "bot",
      type: "link",
      category: "finance",
      metadata: {
        link: {
          url: "/scholarships",
          text: "View Scholarship Details"
        }
      }
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-4">
        {exampleMessages.map((msg, index) => (
          <Message
            key={index}
            {...msg}
            id={`example-${index}`}
            timestamp={new Date()}
          />
        ))}
      </div>
      
      <QuickReplyGrid
        replies={[
          { id: "1", label: "Admissions", icon: "graduation" },
          { id: "2", label: "Programs", icon: "book" },
          { id: "3", label: "Tuition", icon: "dollar" },
          { id: "4", label: "Campus Tour", icon: "building" }
        ]}
        onSelect={(id) => console.log("Selected:", id)}
      />
      
      <TypingIndicator />
    </div>
  );
}

export default Message;