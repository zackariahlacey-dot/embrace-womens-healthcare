import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Patient Portal",
};

export default function PatientPortalPage() {
  return (
    <ComingSoon
      title="Patient Portal"
      description="Online scheduling, secure messaging, and patient records will be available here soon."
    />
  );
}
