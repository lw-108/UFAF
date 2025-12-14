// utils/chatbot-config.ts
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'academics' | 'campus' | 'general';
  keywords: string[];
}

export interface ChatbotConfig {
  institutionName: string;
  welcomeMessage: string;
  contactEmail: string;
  contactPhone: string;
  operatingHours: string;
  faqs: FAQ[];
}

export const defaultConfig: ChatbotConfig = {
  institutionName: "Fill Academy",
  welcomeMessage: "Hello! I'm Fill Academy Assistant. How can I help you today?",
  contactEmail: "admissions@fillacademy.edu",
  contactPhone: "(123) 456-7890",
  operatingHours: "Mon-Fri: 9AM-5PM",
  faqs: [
    // ... your FAQs here
  ]
};