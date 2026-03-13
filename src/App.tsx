import { useEffect, useRef, useState } from "react";
import AboutUs from "./components/AboutUs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import References from "./components/References";
import Services from "./components/Services";

const HEADER_HEIGHT = 56;

export default function App() {
  const [onHero, setOnHero] = useState(true);
  const heroSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = heroSentinelRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0, rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px` }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onHero={onHero} />
      <Hero sentinelRef={heroSentinelRef} />
      <AboutUs />
      <Services />
      <References />
      <Cta />
      <Footer />
    </div>
  );
}
