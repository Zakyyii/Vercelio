import { profile } from "../data/profile";
import { navigation } from "../data/navigation";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="border-t border-hairline"
      style={{ backgroundColor: "var(--ink)", color: "var(--surface)" }}
    >
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-hairline/10">
          <div>
            <h3 className="font-serif text-lg font-bold" style={{ color: "var(--surface)" }}>
              {profile.name}
            </h3>
            <p className="font-mono text-[10px] tracking-wider uppercase mt-1" style={{ color: "var(--muted)" }}>
              {profile.major}
            </p>
          </div>

          <nav aria-label="Footer Navigasi">
            <ul className="flex flex-wrap justify-center gap-6">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors"
                    style={{ color: "rgba(245, 239, 228, 0.6)" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(245, 239, 228, 0.6)")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-hairline/20 rounded-sm flex items-center justify-center transition-all duration-150 hover:border-accent"
            style={{ color: "var(--surface)" }}
            aria-label="Kembali ke atas"
          >
            <FiArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-serif text-xs" style={{ color: "rgba(245, 239, 228, 0.45)" }}>
            © {currentYear} {profile.name}.
          </p>
          <p className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(245, 239, 228, 0.35)" }}>
            Dibuat dengan React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
