import { useState, useEffect, useCallback, useMemo } from "react";
import { navigation } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sectionIds = useMemo(() => navigation.map((item) => item.id), []);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && isOpen) setIsOpen(false);
  }, [isMobile, isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const scrollTo = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = 64;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      if (isOpen) setIsOpen(false);
    },
    [isOpen]
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-[#f5efe4]/95 backdrop-blur-sm border-[#ddd4c5] shadow-xs"
          : "bg-[#f5efe4] border-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-serif text-lg font-semibold tracking-tight text-ink hover:text-accent transition-colors flex items-center gap-2"
          aria-label="Kembali ke bagian pembuka"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-normal">
            §
          </span>
          <span>Portofolio</span>
        </button>

        {isMobile ? (
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
            className="p-2 text-ink hover:text-accent focus-visible:outline-2 focus-visible:outline-accent rounded-xs"
          >
            {isOpen ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
          </button>
        ) : (
          <nav aria-label="Navigasi utama">
            <ul className="flex items-center gap-7">
              {navigation.map((item, index) => {
                const isActive = activeId === item.id;
                const formattedNum = `0${index + 1}`;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`font-mono text-[0.6875rem] tracking-[0.14em] uppercase transition-colors relative py-1 ${
                        isActive
                          ? "text-accent font-medium"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      <span className="opacity-50 mr-1">{formattedNum}.</span>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Mobile Drawer */}
      {isMobile && isOpen && (
        <nav
          id="nav-menu"
          className="border-b border-hairline bg-[#f5efe4] px-6 py-6 transition-all"
          aria-label="Menu navigasi mobile"
        >
          <ul className="flex flex-col gap-4">
            {navigation.map((item, index) => {
              const isActive = activeId === item.id;
              const formattedNum = `0${index + 1}`;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left font-mono text-xs tracking-[0.14em] uppercase py-2 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-accent font-medium border-l-2 border-accent pl-3"
                        : "text-muted hover:text-ink pl-3 border-l-2 border-transparent"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="opacity-50 text-[10px]">{formattedNum}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
