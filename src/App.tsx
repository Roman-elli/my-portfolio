import Header from "./components/header/Header.tsx";
import Hero from "./components/hero/Hero.tsx";
import Sky from "./components/sky/Sky.tsx";
import Contact from "./components/contact/Contact.tsx";
import Ship from "./components/ship/Ship.tsx";

import { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    setIsStart(false);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
  }, []);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 5000);
  };

  return (
    <div
      className={`w-[100svw] h-[100svh] transition-colors duration-5000 ease-linear
    ${mode === "light" ? "bg-light" : "bg-dark"} 
    ${isStart ? "bg-light/30" : ""}
    `}
    >
      <Header
        mode={mode}
        isAnimating={isAnimating}
        toggleMode={toggleMode}
        isStart={isStart}
      />
      <Sky mode={mode} isStart={isStart} />
      <Hero mode={mode} isStart={isStart} />
      <Ship mode={mode} isStart={isStart} />
      <Contact mode={mode} isStart={isStart} isAnimating={isAnimating} />
    </div>
  );
}

export default App;
