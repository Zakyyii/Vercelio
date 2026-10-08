import { skills, tools } from "../data/skills";
import Reveal from "./Reveal";
import {
  SiFigma,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiGithub,
} from "react-icons/si";

const ICON_MAP = {
  SiFigma,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiGithub,
};

function ToolIcon({ iconName }) {
  const IconComponent = ICON_MAP[iconName] || SiGithub;
  return <IconComponent className="text-xl text-ink group-hover:text-accent transition-colors" />;
}

export default function Skills() {
  const technical = skills.filter((s) => s.category === "technical");
  const soft = skills.filter((s) => s.category === "soft");

  return (
    <section id="skills" className="marginalia-block" aria-label="Keahlian dan Perkakas">
      <aside className="marginalia-aside">
        <p className="marginalia-label">03 / KAPABILITAS</p>
        <p className="marginalia-date">Kompetensi & Instrumen</p>
        <p className="marginalia-note">
          Penguasaan teknologi, soft skills, hard skills, dan bahasa pemrograman yang digunakan.
        </p>
      </aside>

      <div className="marginalia-prose">
        <Reveal>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-accent mb-3 font-medium">
            Spesifikasi Keahlian
          </p>

          <h2 className="marginalia-headline">
            Hard skills & <em className="accent-clause">Soft skills.</em>
          </h2>

          <p className="marginalia-body">
            Kombinasi Soft Skills, Hard skills, dan bahasa pemrograman yang digunakan secara konsisten dalam proses pengembangan.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Technical Skills */}
          <Reveal delay={0.1}>
            <div className="p-6 border border-hairline rounded-xs bg-surface/50">
              <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-hairline">
                <h3 className="font-serif font-semibold text-ink text-lg">
                  Hard Skills
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                  Technical Skills
                </span>
              </div>
              <ul className="space-y-3 font-serif text-sm">
                {technical.map((s, idx) => (
                  <li
                    key={s.id}
                    className="flex items-center justify-between py-1.5 border-b border-hairline/40 last:border-0"
                  >
                    <span className="text-ink">{s.name}</span>
                    <span className="font-mono text-[10px] text-muted">
                      0{idx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Soft Skills */}
          <Reveal delay={0.2}>
            <div className="p-6 border border-hairline rounded-xs bg-surface/50">
              <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-hairline">
                <h3 className="font-serif font-semibold text-ink text-lg">
                  Soft skills
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                  Soft skills
                </span>
              </div>
              <ul className="space-y-3 font-serif text-sm">
                {soft.map((s, idx) => (
                  <li
                    key={s.id}
                    className="flex items-center justify-between py-1.5 border-b border-hairline/40 last:border-0"
                  >
                    <span className="text-ink">{s.name}</span>
                    <span className="font-mono text-[10px] text-muted">
                      0{idx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Tools Section */}
        <Reveal delay={0.25}>
          <div className="pt-6 border-t border-hairline/60">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-serif text-xl font-semibold text-ink flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-accent font-normal">
                  § 3.1
                </span>
                <span>Bahasa pemrograman</span>
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted hidden sm:inline">
                STATUS: AKTIF DIGUNAKAN
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tools.map((t) => (
                <div
                  key={t.id}
                  className="group p-4 border border-hairline rounded-xs bg-surface/50 hover:border-ink hover:bg-white/40 transition-all flex items-center gap-3"
                >
                  <ToolIcon iconName={t.icon} />
                  <div>
                    <span className="block font-serif text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      {t.name}
                    </span>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-muted">
                      Alat Kerja
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
