import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "The Wellness Collective",
};

export default function WellnessCollectivePage() {
  return (
    <ComingSoon
      title="The Wellness Collective"
      description="Details about our partner space in Colchester, Vermont — hours, group sessions, and how to visit — are on their way."
    />
  );
}
