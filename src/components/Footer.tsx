import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#4A4335]/15 bg-[#FAF8F5] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <Link
            href="/"
            className="flex shrink-0 items-center justify-center transition-transform hover:scale-[1.02]"
            aria-label="Embrace Women's Healthcare home"
          >
            <Image
              src="/embracelogo.png"
              alt="Embrace Women's Healthcare"
              width={200}
              height={64}
              className="h-12 w-auto sm:h-14 brightness-95"
            />
          </Link>

          <p className="max-w-md text-xs sm:text-sm text-[#5A5346] font-sans">
            The Wellness Collective — 875 Roosevelt Hwy Suite 120, Colchester, VT 05446
          </p>

          <a
            href="tel:8027359779"
            className="text-sm font-semibold text-[#8C6C58] hover:text-[#4A4335] transition-colors"
          >
            802-735-9779
          </a>
        </div>

        <div className="mt-12 border-t border-[#4A4335]/10 pt-8 text-center">
          <p className="text-[10px] sm:text-xs text-[#5A5346]/70 uppercase tracking-widest">
            © 2026 Embrace Women&apos;s Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
