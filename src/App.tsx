import Header from "./components/header/Header.tsx";
import Hero from "./components/hero/Hero.tsx";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div
      className={`w-screen h-screen transition-colors duration-3000 ease-linear
    ${mode === "light" ? "bg-light" : "bg-dark"} 
    `}
    >
      <Header mode={mode} isAnimating={isAnimating} toggleMode={toggleMode} />
      <Hero mode={mode} />
    </div>
  );
}

export default App;
