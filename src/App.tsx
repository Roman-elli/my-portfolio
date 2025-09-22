import Header from "./components/header/Header.tsx";
import { useState } from "react";

function App() {
  const [insLightMode, setInsLightMode] = useState(true);
  const toggleMode = () => setInsLightMode(!insLightMode);

  return (
    <div className="w-screen h-screen bg-black">
      <Header isLightMode={insLightMode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
