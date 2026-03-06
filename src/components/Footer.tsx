import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-pink-50/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <Link
            href="/"
            className="flex shrink-0 items-center justify-center"
            aria-label="Embrace Women's Healthcare home"
          >
            <Image
              src="/embracelogo.png"
              alt="Embrace Women's Healthcare"
              width={200}
              height={64}
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          <p className="mt-6 max-w-md text-sm text-gray-600 sm:text-base">
            The Wellness Collective — 875 Roosevelt Hwy Suite 120, Colchester, VT 05446
          </p>

          <a
            href="mailto:bethany@embracewomenshealthcare.com"
            className="mt-3 text-healthcare-primary transition-colors hover:underline"
          >
            bethany@embracewomenshealthcare.com
          </a>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-8 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Embrace Women&apos;s Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
