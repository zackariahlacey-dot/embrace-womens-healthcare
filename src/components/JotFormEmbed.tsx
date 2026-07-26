"use client";

import Script from "next/script";
import { JOTFORM_ID } from "@/lib/constants";

interface JotFormEmbedProps {
  formId?: string;
  title?: string;
  initialHeight?: number;
}

export function JotFormEmbed({
  formId = JOTFORM_ID,
  title = "Patient Contact Form",
  initialHeight = 539,
}: JotFormEmbedProps) {
  const iframeId = `JotFormIFrame-${formId}`;
  return (
    <>
      <iframe
        id={iframeId}
        title={title}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src={`https://hipaa.jotform.com/${formId}`}
        frameBorder={0}
        scrolling="no"
        className="w-full block bg-white rounded-2xl"
        style={{ minHeight: initialHeight, border: "none" }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as unknown as {
            jotformEmbedHandler?: (selector: string, base: string) => void;
          };
          w.jotformEmbedHandler?.(
            `iframe[id='${iframeId}']`,
            "https://hipaa.jotform.com/"
          );
        }}
      />
    </>
  );
}
