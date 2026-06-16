import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Forms",
};

export default function FormsPage() {
  return (
    <ComingSoon
      title="Forms"
      description="Intake paperwork and consent forms will be posted here. In the meantime, please reach out via the contact form for anything you need before your visit."
    />
  );
}
