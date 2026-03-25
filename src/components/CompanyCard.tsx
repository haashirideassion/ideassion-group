import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Company } from "@/data/companies";

interface Props {
  company: Company;
}

// SVG logos and darkBgReady logos work natively on dark backgrounds.
// Other PNGs (dark-on-white or colourful-on-white) need CSS blend tricks.
function getLogoStyle(company: Company): React.CSSProperties {
  if (company.logoPath.endsWith(".svg")) return {};
  if (company.darkBgReady) return {};
  // invert: dark→light, white-bg→black; hue-rotate(180°) re-normalises hue; screen makes black bg vanish.
  return {
    filter: "invert(1) hue-rotate(180deg) brightness(1.6)",
    mixBlendMode: "screen" as const,
  };
}

export default function CompanyCard({ company }: Props) {
  const isSvg = company.logoPath.endsWith(".svg");
  const logoStyle = getLogoStyle(company);

  return (
    <div
      className="group flex flex-col rounded-2xl border border-white/10 transition-all duration-300 hover:border-vivid-cyan/40 overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Logo container — no background, logos render via blend mode */}
      <div className="mx-4 mt-5 flex items-center justify-center h-16 overflow-hidden shrink-0">
        {company.isTriton ? (
          <div className="flex items-center gap-2.5" style={logoStyle}>
            <img
              src={company.logoPath}
              alt=""
              className="h-10 w-auto object-contain"
            />
            <span className="font-extrabold text-lg tracking-wider text-white">
              TRITON LABS
            </span>
          </div>
        ) : (
          <img
            src={company.logoPath}
            alt={company.name}
            className={isSvg ? "h-10 w-auto object-contain" : "h-full w-auto max-w-full object-contain"}
            style={logoStyle}
          />
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-1.5"
          style={{ color: "var(--color-spring-green)" }}
        >
          {company.tagline}
        </p>
        <h3 className="text-white font-semibold text-base leading-snug mb-2">
          {company.name}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1 mb-4"
          style={{ color: "rgba(241,241,222,0.65)" }}
        >
          {company.description}
        </p>
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "default" }),
            "w-fit p-0 h-auto text-sm font-medium hover:bg-transparent"
          )}
          style={{ color: "var(--color-vivid-cyan)" }}
        >
          Visit Site →
        </a>
      </div>
    </div>
  );
}
