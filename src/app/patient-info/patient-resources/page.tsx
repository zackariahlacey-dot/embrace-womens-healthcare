import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Patient Resources",
};

export default function PatientResourcesPage() {
  return (
    <ComingSoon
      title="Patient Resources"
      description="Educational guides, recommended reading, and trusted tools to support your wellness journey are coming soon."
    />
  );
}
