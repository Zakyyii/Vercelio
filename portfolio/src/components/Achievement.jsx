import { useState } from "react";
import { achievements } from "../data/achievements";
import AchievementModal from "./AchievementModal";
import Reveal from "./Reveal";

function AchievementCardItem({ item, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      className="scholarly-card p-0 overflow-hidden text-left w-full cursor-pointer group/card border border-hairline hover:border-accent/60 transition-all duration-200"
      onClick={() => onClick(item)}
      aria-label={`Detail pencapaian: ${item.title}`}
      type="button"
    >
      <div className="w-full h-48 sm:h-52 overflow-hidden border-b border-hairline bg-[rgba(15,15,15,0.03)] relative">
        {imgError ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center text-hairline p-4 text-center bg-[#eae3d5]"
            aria-hidden="true"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent/40 mb-1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="font-mono text-[10px] uppercase text-ink/70 font-medium">
              {item.title}
            </span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover block filter grayscale group-hover/card:grayscale-0 transition-all duration-300"
            loading="lazy"
            width={400}
            height={208}
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute top-2 right-2 bg-ink/80 text-surface text-[9px] font-mono px-2 py-0.5 rounded-xs tracking-wider uppercase backdrop-blur-xs">
          {item.year}
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <span className="font-mono text-[0.625rem] tracking-[0.12em] uppercase text-accent block mb-1 font-medium">
          {item.organization}
        </span>
        <h4 className="font-serif text-base font-semibold text-ink mb-1.5 leading-snug group-hover/card:text-accent transition-colors">
          {item.title}
        </h4>
        <p className="font-serif text-[0.8125rem] leading-relaxed text-muted m-0 line-clamp-2">
          {item.description}
        </p>
      </div>
    </button>
  );
}

export default function Achievement() {
  const [selected, setSelected] = useState(null);

  // Repeat/duplicate achievements for continuous seamless infinite marquee scroll
  const marqueeAchievements = [...achievements, ...achievements, ...achievements, ...achievements];

  return (
    <section
      id="achievement"
      className="marginalia-block"
      aria-label="Pencapaian"
    >
      <aside className="marginalia-aside">
        <p className="marginalia-label">04 / CAPAIAN</p>
        <p className="marginalia-date">Arsip Pencapaian Saya</p>
        <p className="marginalia-note">
          Rekam jejak pencapaian.
        </p>
      </aside>

      <div className="marginalia-prose">
        <Reveal>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-accent mb-3 font-medium">
            Daftar Pencapaian
          </p>
          <h2 className="marginalia-headline">
            Rekam Jejak &{" "}
            <em className="accent-clause">Capaian Terverifikasi.</em>
          </h2>
          <p className="marginalia-body mb-6" style={{ maxWidth: "65ch" }}>
            Kumpulan pencapaian dari berbagai kegiatan program pengembangan. <span className="italic">Klik kartu untuk melihat detail pencapaian.</span>
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="col-span-full mt-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.slice(0, 3).map((item) => (
            <AchievementCardItem
              key={item.id}
              item={item}
              onClick={setSelected}
            />
          ))}
        </div>
      </Reveal>

      {selected && (
        <AchievementModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
