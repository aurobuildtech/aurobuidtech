import { useEffect, useRef, useState } from "react";

 function LazySection({
  children,
  placeholderHeight = 260,
  rootMargin = "260px",
  forceMount = false, // ✅ NEW
}) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ✅ If forced, mount immediately
    if (forceMount) {
      setMounted(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [forceMount, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: mounted ? "auto" : placeholderHeight }}>
      {mounted ? children : null}
    </div>
  );
}

export default LazySection