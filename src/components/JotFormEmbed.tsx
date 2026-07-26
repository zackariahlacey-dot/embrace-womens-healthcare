"use client";

import { useEffect, useRef } from "react";
import { JOTFORM_ID } from "@/lib/constants";

interface JotFormEmbedProps {
  formId?: string;
  title?: string;
  initialHeight?: number;
}

/**
 * Two things matter for the iframe not clipping the submit button:
 *   1) The embed handler script has to register BEFORE the form finishes
 *      loading so it doesn't miss the initial setHeight postMessage. We
 *      inject the script imperatively after the iframe is mounted.
 *   2) The initial min-height is a fallback for the split-second before
 *      the handler fires — kept generous so nothing gets cut off if the
 *      script is slow or blocked.
 */
export function JotFormEmbed({
  formId = JOTFORM_ID,
  title = "Patient Contact Form",
  initialHeight = 1500,
}: JotFormEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeId = `JotFormIFrame-${formId}`;

  useEffect(() => {
    const HANDLER_SRC =
      "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";

    const register = () => {
      const w = window as unknown as {
        jotformEmbedHandler?: (selector: string, base: string) => void;
      };
      w.jotformEmbedHandler?.(
        `iframe[id='${iframeId}']`,
        "https://hipaa.jotform.com/"
      );
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src='${HANDLER_SRC}']`
    );

    if (existing) {
      register();
      return;
    }

    const script = document.createElement("script");
    script.src = HANDLER_SRC;
    script.async = true;
    script.onload = register;
    document.body.appendChild(script);
  }, [iframeId]);

  return (
    <iframe
      ref={iframeRef}
      id={iframeId}
      title={title}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src={`https://hipaa.jotform.com/${formId}`}
      scrolling="no"
      className="w-full block bg-white rounded-2xl"
      style={{ minHeight: initialHeight, border: "none" }}
    />
  );
}
