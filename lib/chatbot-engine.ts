// src/lib/chatbot-engine.ts

import { chatbotQAs } from "@/data/chatbot-qa";

export function getBotAnswer(userInput: string): string {
  const normalizedInput = userInput.toLowerCase().trim();

  for (const qa of chatbotQAs) {
    if (
      qa.questions.some((q) =>
        normalizedInput.includes(q.toLowerCase())
      )
    ) {
      return qa.answer;
    }
  }

  return fallbackAnswer();
}

function fallbackAnswer() {
  return (
    "I'm not sure about that yet. You can ask about courses, fees, admissions, schedules, or placements."
  );
}
