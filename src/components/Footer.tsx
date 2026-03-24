import ideassionLogo from "/logos/ideassion.png";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 py-10"
      style={{ backgroundColor: "var(--color-firefly-deep)" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white rounded-xl h-10 px-4 flex items-center justify-center overflow-hidden">
          <img
            src={ideassionLogo}
            alt="Ideassion"
            className="h-7 w-auto object-contain"
          />
        </div>
        <p className="text-sm" style={{ color: "rgba(241,241,222,0.4)" }}>
          © {new Date().getFullYear()} Ideassion Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
