import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";

export default function CompaniesGrid() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "var(--color-firefly)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--color-spring-green)" }}
          >
            Our Companies
          </p>
          <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-4">
            The Ideassion Family
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(241,241,222,0.6)" }}
          >
            Six ventures. One shared mission.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.url} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
