import Image from "next/image";
import Link from "next/link";

const providerHours = [
  { day: "Tuesday", hours: "7:30 am – 7:00 pm" },
  { day: "Thursday", hours: "3:00 pm – 7:00 pm" },
  { day: "Friday", hours: "7:30 am – 7:00 pm" },
  { day: "Saturday", hours: "7:30 am – 12:00 pm" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1F2E4C]/15 bg-[#FAF8F5] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start text-center md:text-left">
          {/* Logo + contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link
              href="/"
              className="flex shrink-0 items-center transition-transform hover:scale-[1.02]"
              aria-label="Embrace Women's Healthcare home"
            >
              <Image
                src="/embrace-womens-healthcare-vermont-logo.png"
                alt="Embrace Women's Healthcare"
                width={200}
                height={64}
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <p className="max-w-xs text-xs sm:text-sm text-[#3D4A66] font-sans leading-relaxed">
              The Wellness Collective
              <br />
              875 Roosevelt Hwy Suite 120
              <br />
              Colchester, VT 05446
            </p>
            <a
              href="tel:8027359779"
              className="text-sm font-semibold text-[#3AA5A0] hover:text-[#1F2E4C] transition-colors"
            >
              802-735-9779
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#3AA5A0] mb-4">
              Provider Hours
            </p>
            <ul className="space-y-2 w-full max-w-[220px] mx-auto md:mx-0">
              {providerHours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-baseline justify-between gap-3 text-xs sm:text-sm text-[#3D4A66]"
                >
                  <span className="font-semibold text-[#1F2E4C]">{row.day}</span>
                  <span className="tabular-nums">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#3AA5A0] mb-4">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1F2E4C]">
              <li>
                <Link href="/new-patients" className="hover:text-[#3AA5A0] transition-colors">
                  New Patients
                </Link>
              </li>
              <li>
                <Link href="/fee-schedule" className="hover:text-[#3AA5A0] transition-colors">
                  Fee Schedule
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#3AA5A0] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/patient-info/wellness-collective" className="hover:text-[#3AA5A0] transition-colors">
                  The Wellness Collective
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3AA5A0] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1F2E4C]/10 pt-8 text-center">
          <p className="text-[10px] sm:text-xs text-[#3D4A66]/70 uppercase tracking-widest">
            © 2026 Embrace Women&apos;s Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
