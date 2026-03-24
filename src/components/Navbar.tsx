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
      <div className="h-16 flex items-center justify-center">
        <img
          src={ideassionLogo}
          alt="Ideassion"
          className="h-11 w-auto object-contain"
          style={{
            filter: "invert(1) brightness(2.5)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </header>
  );
}
