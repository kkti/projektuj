// src/App.tsx
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";      // ⬅️ přesunuto nahoru
import Services from "./components/Services";
import References from "./components/References";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  const [onHero, setOnHero] = useState(true);
  const heroSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroSentinelRef.current;
    if (!el) return;
    const headerHeight = 56; // px (odpovídá h-14)
    const obs = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0, rootMargin: `-${headerHeight}px 0px 0px 0px` }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onHero={onHero} />
      <Hero sentinelRef={heroSentinelRef} />
      <AboutUs />       {/* ⬅️ nově jako první obsahová sekce */}
      <Services />
      <References />
      <Cta />
      <Footer />
    </div>
  );
}
