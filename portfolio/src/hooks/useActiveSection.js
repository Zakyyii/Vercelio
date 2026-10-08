import { useEffect, useState, useMemo } from "react";

export function useActiveSection(ids, offset = 80) {
  const [activeId, setActiveId] = useState(ids[0]);
  const idsKey = useMemo(() => ids.join(","), [ids]);

  useEffect(() => {
    const observers = [];
    const handleIntersect = (id) => (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(id);
      });
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(handleIntersect(id), {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0.1,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [idsKey, offset]);

  return activeId;
}
