import { motion } from "motion/react";
import { useEffect } from "react";

declare global {
  interface Window {
    paywallHandshake?: (cb: (hasAccess: boolean) => void) => void;
  }
}

export default function NewsletterPage() {
  // Re-check access every 30 seconds (not on initial load — paywall script handles that).
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window.paywallHandshake === "function") {
        window.paywallHandshake((hasAccess) => {
          if (!hasAccess) {
            // Paywall script will show the overlay; nothing else needed here.
          }
        });
      }
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Atmospheric background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.22 0.06 255 / 0.7) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 105%, oklch(0.78 0.12 85 / 0.08) 0%, transparent 60%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.12 85) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.12 85) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <main
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20"
        data-ocid="newsletter.section"
      >
        {/* Eyebrow ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
          aria-hidden="true"
        >
          <span
            className="block h-px w-12 md:w-20"
            style={{ background: "oklch(0.78 0.12 85 / 0.5)" }}
          />
          <span
            className="block w-1.5 h-1.5 rotate-45"
            style={{ background: "oklch(0.78 0.12 85)" }}
          />
          <span
            className="block h-px w-12 md:w-20"
            style={{ background: "oklch(0.78 0.12 85 / 0.5)" }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-display text-center font-bold leading-tight tracking-tight"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            color: "oklch(0.96 0.008 90)",
            textShadow: "0 2px 32px oklch(0.78 0.12 85 / 0.15)",
          }}
        >
          Entar Investment
          <br />
          <span
            style={{
              color: "oklch(0.78 0.12 85)",
              background:
                "linear-gradient(90deg, oklch(0.78 0.12 85), oklch(0.88 0.14 85), oklch(0.78 0.12 85))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}
          >
            Newsletter
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="mt-5 text-center font-sans tracking-[0.25em] uppercase"
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
            color: "oklch(0.78 0.12 85 / 0.9)",
            letterSpacing: "0.28em",
          }}
        >
          Own Tomorrow Today
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10 mb-10 h-px w-32"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.78 0.12 85 / 0.6), transparent)",
          }}
        />

        {/* Coming Soon card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          data-ocid="newsletter.card"
          className="relative px-12 py-10 md:px-20 md:py-14 rounded-sm text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.17 0.03 255 / 0.9) 0%, oklch(0.14 0.025 255 / 0.95) 100%)",
            border: "1px solid oklch(0.78 0.12 85 / 0.2)",
            boxShadow:
              "0 0 60px -15px oklch(0.78 0.12 85 / 0.25), 0 32px 80px -20px oklch(0.05 0.02 255 / 0.6)",
          }}
        >
          {/* Corner accents */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 w-5 h-5"
            style={{
              borderTop: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
              borderLeft: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
            }}
          />
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 w-5 h-5"
            style={{
              borderTop: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
              borderRight: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
            }}
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-5 h-5"
            style={{
              borderBottom: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
              borderLeft: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
            }}
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-5 h-5"
            style={{
              borderBottom: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
              borderRight: "1.5px solid oklch(0.78 0.12 85 / 0.7)",
            }}
          />

          <p
            className="font-display italic"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              color: "oklch(0.78 0.12 85)",
              fontWeight: 400,
              letterSpacing: "0.04em",
            }}
          >
            Coming Soon
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 py-6 text-center"
        style={{
          borderTop: "1px solid oklch(0.78 0.12 85 / 0.12)",
        }}
      >
        <p
          className="font-sans text-sm"
          style={{ color: "oklch(0.55 0.015 90)" }}
        >
          &copy; 2026 Entar&reg; AI
        </p>
      </footer>
    </div>
  );
}
