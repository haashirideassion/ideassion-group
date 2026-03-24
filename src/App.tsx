import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompaniesGrid from "@/components/CompaniesGrid";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "var(--color-firefly)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <CompaniesGrid />
      <Footer />
    </div>
  );
}
