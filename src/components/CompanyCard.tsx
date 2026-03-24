import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Company } from "@/data/companies";

interface Props {
  company: Company;
}

export default function CompanyCard({ company }: Props) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-white/10 transition-all duration-300 hover:border-vivid-cyan/40 overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Logo container — uniform white box */}
      <div className="mx-4 mt-4 rounded-xl bg-white flex items-center justify-center h-20 p-3 overflow-hidden shrink-0">
        {company.isTriton ? (
          <div className="flex items-center gap-2">
            <img
              src={company.logoPath}
              alt=""
              className="h-10 w-auto object-contain"
            />
            <span
              className="font-extrabold text-lg tracking-wider"
              style={{ color: "var(--color-firefly)" }}
            >
              TRITON LABS
            </span>
          </div>
        ) : (
          <img
            src={company.logoPath}
            alt={company.name}
            className="h-full w-full object-contain"
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
