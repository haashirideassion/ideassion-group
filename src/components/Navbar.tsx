import ideassionLogo from "/logos/ideassion.png";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        backgroundColor: "rgba(0,47,52,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-3">
        <div className="bg-white rounded-lg h-8 w-8 flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src={ideassionLogo}
            alt="Ideassion"
            className="h-full w-full object-contain"
          />
        </div>
        <span className="text-white font-semibold text-base tracking-tight">
          Ideassion Group
        </span>
      </div>
    </header>
  );
}
