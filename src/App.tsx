import Header from "./components/header/Header.tsx";
import Hero from "./components/hero/Hero.tsx";
import Sky from "./components/sky/Sky.tsx";
import Contact from "./components/contact/Contact.tsx";

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
        <div className={`relative flex flex-col w-full h-[300svh] overflow-x-hidden transition-colors duration-[5000ms] ease-linear
        ${mode === "light" ? "bg-light" : "bg-dark"}
            ${isStart ? "bg-light/30" : ""}
        `}>
            <Header
                mode={mode}
                isAnimating={isAnimating}
                toggleMode={toggleMode}
                isStart={isStart}
            />
            <Contact mode={mode} isStart={isStart} isAnimating={isAnimating} />
            <div className="sticky top-0 h-[100svh]">
                <div
                    className={`relative w-full h-full 
          `}
                >

                    <Sky mode={mode} isStart={isStart} />
                    <Hero mode={mode} isStart={isStart} />

                </div>
            </div>

            <section className="absolute top-[100svh] left-0 w-full h-[100svh] flex items-center justify-center rounded-t-4xl text-white text-4xl z-40">
                about me
            </section>

            <section className="absolute top-[200svh] left-0 w-full h-[100svh] flex items-center justify-center text-white text-4xl z-40">
                projects
            </section>


        </div>
    );
}

export default App;