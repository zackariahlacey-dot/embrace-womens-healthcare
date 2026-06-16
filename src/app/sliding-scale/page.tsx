import type { Metadata } from "next";
import SlidingScale from "@/components/SlidingScale";

export const metadata: Metadata = {
  title: "Sliding Scale",
};

export default function SlidingScalePage() {
  return <SlidingScale />;
}
