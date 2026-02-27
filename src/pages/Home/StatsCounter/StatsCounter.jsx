import { useEffect, useRef, useState } from "react";
import "./StatsCounter.css";


function useCountUp({ end = 0, duration = 1200, decimals = 0, startWhen = true }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = start + (end - start) * progress;

      setValue(Number(current.toFixed(decimals)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration, decimals, startWhen]);

  return value;
}




export default function StatsCounter() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="statsWrap container" ref={ref}>
      <div className="statsBar">
        <StatItem start={start} end={15} suffix="+ Years" title="Industry Experience" />
        <StatItem start={start} end={33} suffix="+" title="Projects Completed" />
        <StatItem start={start} end={4.8} decimals={1} suffix="/5" title="Client Satisfaction" />
        <StatItem start={start} end={100} suffix="%" title="Licensed & Insured" />
      </div>
    </section>
  );
}


function StatItem({ start, end, decimals = 0, suffix = "", title, subtitle }) {
  const count = useCountUp({ end, duration: 1400, decimals, startWhen: start });

  return (
    <div className="statItem">
      <div className="statValue">
        {count}{suffix}
      </div>
      <div className="statLabel">{title}</div>
      {subtitle ? <div className="statSubLabel">{subtitle}</div> : null}
    </div>
  );
}
