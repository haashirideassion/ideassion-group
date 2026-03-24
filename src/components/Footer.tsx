import ideassionLogo from "/logos/ideassion.png";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 py-10"
      style={{ backgroundColor: "var(--color-firefly-deep)" }}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={ideassionLogo}
          alt="Ideassion"
          className="h-9 w-auto object-contain"
          style={{
            filter: "invert(1) brightness(2.5)",
            mixBlendMode: "screen",
          }}
        />
        <p className="text-sm" style={{ color: "rgba(241,241,222,0.4)" }}>
          © {new Date().getFullYear()} Ideassion Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
