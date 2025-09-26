import Header from "./components/header/Header.tsx";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark" | "animating">("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`
        w-screen h-screen
        ${mode === "light" ? "bg-[#FF8888]" : ""}
        ${mode === "dark" ? "bg-[#06001D]" : ""}
      `}
    >
      <Header mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
