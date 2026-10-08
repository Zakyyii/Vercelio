import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="home" className="marginalia-block relative" aria-label="Pembuka">
      {/* CSS-only starfield background — no WebGL, no shader, no rAF */}
      <div className="absolute top-0 left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen h-full overflow-hidden -z-10 pointer-events-none" style={{ background: "linear-gradient(180deg, #000408 0%, #050d1a 60%, #0d1117 100%)" }}>
        {/* Static star dots via CSS box-shadow — zero JS, zero GPU shader */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 22% 38%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 8%, rgba(255,255,255,0.9) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 48% 52%, rgba(255,220,180,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 25%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 73% 70%, rgba(200,220,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 12%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 45%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 80%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 18% 62%, rgba(255,200,200,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 85%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 40%, rgba(200,200,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 67% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(2px 2px at 78% 30%, rgba(255,240,200,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 88% 75%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 3% 50%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 22%, rgba(200,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 68%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 5%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 95% 60%, rgba(255,220,255,0.5) 0%, transparent 100%)
          `,
        }} />
        {/* Subtle nebula glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 40% at 30% 40%, rgba(80,40,120,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 30% at 70% 60%, rgba(20,60,120,0.12) 0%, transparent 70%)",
        }} />
        {/* Gradient overlay to blend into the light theme below */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
      </div>

      <aside className="marginalia-aside relative z-10">
        <p className="marginalia-label !text-accent mix-blend-difference">01 / INTRO</p>
        <p className="marginalia-date mix-blend-difference text-surface/70">Catatan Pembuka</p>
        <p className="marginalia-note mix-blend-difference text-surface/70">
          Dokumentasi personal, rekam jejak akademik, dan kurasi karya.
        </p>
      </aside>

      <div className="marginalia-prose relative z-10 text-surface">
        <Reveal>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-accent mb-3 font-medium mix-blend-difference">
            Dokumentasi & Portofolio
          </p>

          <h1 className="marginalia-headline text-surface mix-blend-difference">
            {profile.name}, <em className="accent-clause !text-accent">Future Programmer.</em>
          </h1>

          <p className="marginalia-body text-surface/80 mix-blend-difference">
            {profile.headline}
          </p>

          <p className="marginalia-body text-surface/80 mix-blend-difference">
            Website ini berisikan perkenalan, rekam jejak studi, pengalaman berorganisasi, serta capaian yang telah
            diraih.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              className="btn-primary !bg-surface !text-ink hover:!bg-white"
              onClick={() => scrollTo("achievement")}
            >
              Jelajahi Arsip Pencapaian
            </button>
            <button
              className="btn-secondary !border-surface/40 !text-surface hover:!bg-surface/10 hover:!border-surface"
              onClick={() => scrollTo("about")}
            >
              Baca Data Pokok
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
