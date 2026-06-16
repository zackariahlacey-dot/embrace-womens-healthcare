import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Clinical Focus Areas",
};

export default function ClinicalFocusAreasPage() {
  return (
    <ComingSoon
      title="Clinical Focus Areas"
      description="In-depth clinical details on hormone therapy, vaginal health, nutritional support, and acute visits — coming soon."
      backHref="/services"
      backLabel="Back to Services"
    />
  );
}
