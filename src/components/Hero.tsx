import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ backgroundColor: "var(--color-firefly)" }}
    >
      {/* Background: subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(3,255,131,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(0,218,255,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Background: oversized Ideassion butterfly watermark */}
      <img
        src="/logos/ideassion.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "580px",
          opacity: 0.04,
          mixBlendMode: "screen",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <p
          className="text-sm font-semibold tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--color-spring-green)" }}
        >
          The Ideassion Group
        </p>

        <h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          Intelligence.
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, var(--color-spring-green), var(--color-vivid-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Delivered.
          </span>
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: "rgba(241,241,222,0.7)" }}
        >
          A family of companies delivering intelligence across technology,
          talent, creativity, and industry.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown
          size={24}
          style={{ color: "var(--color-vivid-cyan)", opacity: 0.6 }}
        />
      </div>
    </section>
  );
}
