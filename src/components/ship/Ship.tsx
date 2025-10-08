import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import ShipModel from "./../ui/ship/ShipModel.tsx";

type ShipProps = {
    mode: "light" | "dark";
    isStart: boolean;
};

function Ship({ mode, isStart }: ShipProps) {
    const [active, setActive] = useState(mode);

    useEffect(() => {
        // adiciona um pequeno delay antes de trocar visibilidade, se quiser animação
        const timer = setTimeout(() => setActive(mode), 300);
        return () => clearTimeout(timer);
    }, [mode]);

    return (
        <div
            className="flex fixed inset-0 z-[85] justify-center items-center bg-transparent"
        >
            <div
                className={`absolute w-full h-full transition-all duration-3000 ease-in-out
          ${active === "light"
                    ? "opacity-100 translate-y-[35%]  z-20"
                    : "opacity-50 translate-y-[65%] translate-x-[-40%] rotate-[-60deg] z-10"
                }`}
            >
                <Canvas
                    camera={{ position: [0, 0, 6], fov: 45 }}
                    gl={{ alpha: true }}
                >
                    <ambientLight intensity={1} />
                    <directionalLight position={[0, 0, 3]} intensity={1.2} />
                    <ShipModel
                        model="./airplane.glb"
                        lowSize={0.7}
                        mediumSize={0.9}
                        highSize={1.2}
                    />
                </Canvas>
            </div>
            
            <div
                className={`absolute w-full h-full transition-all duration-3000 ease-in-out
          ${active === "dark"
                    ? "opacity-100 translate-y-[25%] z-20"
                    : "opacity-50 translate-y-[65%] translate-x-[40%] rotate-[60deg] z-10"
                }`}
            >
                <Canvas
                    camera={{ position: [0, 0, 6], fov: 45 }}
                    gl={{ alpha: true }}
                >
                    <ambientLight intensity={2} />
                    <directionalLight position={[0, 0, 10]} intensity={1} />
                    <ShipModel
                        model="./spaceship.glb"
                        lowSize={0.12}
                        mediumSize={0.14}
                        highSize={0.16}
                    />
                </Canvas>
            </div>
        </div>
    );
}

export default Ship;
