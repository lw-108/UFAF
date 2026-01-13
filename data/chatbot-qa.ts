export type ChatbotQA = {
  id: string;
  questions: string[];
  answer: string;
  category:
    | "courses"
    | "fees"
    | "admission"
    | "schedule"
    | "placement"
    | "contact";
  updatedAt: string;
};

export const chatbotQAs: ChatbotQA[] = [
  /* ================= COURSES ================= */
  {
    id: "courses",
    category: "courses",
    questions: [
      "course",
      "courses",
      "program",
      "programs",
      "what courses",
      "available courses",
      "course list",
      "what can i study",
      "training programs",
    ],
    answer:
      "We offer Full-Stack Development, Data Science, and Digital Marketing courses. Duration ranges from 3 to 12 months depending on the program.",
    updatedAt: new Date().toISOString(),
  },

  /* ================= FEES ================= */
  {
    id: "fees",
    category: "fees",
    questions: [
      "fee",
      "fees",
      "cost",
      "price",
      "pricing",
      "fees structure",
      "course fees",
      "how much",
      "payment",
      "emi",
    ],
    answer:
      "Course fees range from ₹25,000 to ₹85,000 depending on the course. EMI options and scholarships are available.",
    updatedAt: new Date().toISOString(),
  },

  /* ================= ADMISSION ================= */
  {
    id: "admission",
    category: "admission",
    questions: [
      "admission",
      "admissions",
      "apply",
      "application",
      "join",
      "joining",
      "how to apply",
      "admission process",
      "enroll",
      "enrollment",
    ],
    answer:
      "Admissions are open year-round. You can apply online or visit our campus for counseling and enrollment assistance.",
    updatedAt: new Date().toISOString(),
  },

  /* ================= SCHEDULE ================= */
  {
    id: "schedule",
    category: "schedule",
    questions: [
      "schedule",
      "timing",
      "timings",
      "time",
      "batch",
      "batches",
      "class time",
      "class timings",
      "when are classes",
    ],
    answer:
      "Classes run Monday to Saturday with Morning (9–12), Afternoon (2–5), and Evening (6–9) batches available.",
    updatedAt: new Date().toISOString(),
  },

  /* ================= PLACEMENT ================= */
  {
    id: "placement",
    category: "placement",
    questions: [
      "placement",
      "placements",
      "job",
      "jobs",
      "career",
      "placement support",
      "job assistance",
      "job guarantee",
      "hiring",
    ],
    answer:
      "We have a 92% placement rate with 300+ hiring partners. Career guidance, resume building, and interview training are included.",
    updatedAt: new Date().toISOString(),
  },

  /* ================= CONTACT ================= */
  {
    id: "contact",
    category: "contact",
    questions: [
      "contact",
      "phone",
      "email",
      "address",
      "location",
      "reach",
      "support",
      "help",
    ],
    answer:
      "You can contact us at info@ufillacademy.com or call 1800-UFILL. Visit our campus for in-person support.",
    updatedAt: new Date().toISOString(),
  },
];
