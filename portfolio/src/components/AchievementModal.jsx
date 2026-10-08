import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AchievementModal({ item, onClose }) {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusable = overlayRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`Detail: ${item.title}`}
      >
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <button
            ref={closeRef}
            className="modal__close"
            onClick={onClose}
            aria-label="Tutup modal"
          >
            &times;
          </button>
          <img
            src={item.image}
            alt={item.title}
            className="modal__img"
            width={600}
            height={400}
          />
          <div className="modal__body">
            <h3 className="modal__title">{item.title}</h3>
            <span className="modal__meta">
              {item.year} &middot; {item.organization}
            </span>
            <p className="modal__desc">{item.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
