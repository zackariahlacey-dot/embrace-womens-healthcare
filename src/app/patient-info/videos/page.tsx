import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Videos",
};

export default function VideosPage() {
  return (
    <ComingSoon
      title="Videos"
      description="Short educational videos from Bethany are coming in July — bite-sized walkthroughs on the topics we cover most in clinic."
    />
  );
}
