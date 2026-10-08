import { useState } from "react";

export default function AchievementCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      className="ach-card"
      onClick={() => onClick(item)}
      aria-label={`Detail pencapaian: ${item.title}`}
      type="button"
    >
      <div className="ach-card__img-wrapper">
        {imgError ? (
          <div className="ach-card__placeholder" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="ach-card__img"
            loading="lazy"
            width={320}
            height={200}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="ach-card__body">
        <h4 className="ach-card__title">{item.title}</h4>
        <span className="ach-card__meta">
          {item.year} &middot; {item.organization}
        </span>
        <p className="ach-card__desc">{item.description}</p>
      </div>
    </button>
  );
}
