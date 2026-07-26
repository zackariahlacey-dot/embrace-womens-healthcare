import type { Metadata } from "next";
import FeeSchedule from "@/components/FeeSchedule";

export const metadata: Metadata = {
  title: "Fee Schedule",
};

export default function FeeSchedulePage() {
  return <FeeSchedule />;
}
