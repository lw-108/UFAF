import {
  BookOpen,
  Calendar,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Phone,
  Clock,
} from "lucide-react";

const quickActions = [
  {
    text: "Courses",
    icon: <BookOpen className="w-4 h-4" />,
    query: "What courses does U-Fill Academy offer?",
  },
  {
    text: "Admissions",
    icon: <Calendar className="w-4 h-4" />,
    query: "How to apply for admission at U-Fill Academy?",
  },
  {
    text: "Fees",
    icon: <DollarSign className="w-4 h-4" />,
    query: "What is the fee structure for courses?",
  },
  {
    text: "Placements",
    icon: <Briefcase className="w-4 h-4" />,
    query: "What is the placement record and support?",
  },
  {
    text: "Faculty",
    icon: <Users className="w-4 h-4" />,
    query: "Tell me about faculty members at U-Fill",
  },
  {
    text: "Scholarship",
    icon: <GraduationCap className="w-4 h-4" />,
    query: "Are there scholarships available?",
  },
  {
    text: "Contact",
    icon: <Phone className="w-4 h-4" />,
    query: "Contact information for U-Fill Academy",
  },
  {
    text: "Timings",
    icon: <Clock className="w-4 h-4" />,
    query: "What are the class timings and duration?",
  },
];

interface QuickActionsProps {
  onActionClick: (query: string) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  return (
    <div className="p-4 border-gray-200 border-y dark:border-gray-800 bg-gray-50 dark:bg-gray-950/50">
      <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
        Quick Questions:
      </p>
      <div className="grid grid-cols-4 gap-2">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => onActionClick(action.query)}
            className="flex flex-col items-center gap-1.5 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 group"
          >
            <div className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
              {action.icon}
            </div>
            <span className="text-xs font-medium leading-tight text-center text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300">
              {action.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
