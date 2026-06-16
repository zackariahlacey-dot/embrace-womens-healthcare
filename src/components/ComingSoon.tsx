import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}

export function ComingSoon({
  title,
  description,
  backHref = "/patient-info",
  backLabel = "Back to Patient Info",
}: ComingSoonProps) {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#4A4335]/5 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6C58] mb-3">
          Coming Soon
        </p>
        <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-sm sm:text-base text-[#5A5346] leading-relaxed font-sans mb-10">
            {description}
          </p>
        )}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4335] hover:text-[#8C6C58] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
      </div>
    </section>
  );
}
