import UpcomingEvents from "@/components/pages/upcomingevents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - U Fill Academy",
  description: "Free workshops, seminars, and cultural events for students",
};

export default function Events() {
  return <UpcomingEvents />;
}