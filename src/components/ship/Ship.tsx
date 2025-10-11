import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import ShipModel from "../ui/ship/ShipModel";
import "./Ship.css";

type ShipProps = {
  mode: "light" | "dark";
  isStart: boolean;
};

export default function Ship({ mode, isStart }: ShipProps) {
  const [airplaneVisible, setAirplaneVisible] = useState(mode === "light");
  const [spaceshipVisible, setSpaceshipVisible] = useState(mode === "dark");
  const [spaceShipStart, setSpaceShipStart] = useState<boolean>(true);
  const [airplaneStart, setAirplaneStart] = useState<boolean>(true);

  useEffect(() => {
    if (mode === "light") {
      setSpaceshipVisible(false);

      setTimeout(() => {
        setAirplaneVisible(true);
        setAirplaneStart(false);
      }, 2500);

      setTimeout(() => {
        setSpaceShipStart(true);
      }, 5000);
    } else {
      setAirplaneVisible(false);

      setTimeout(() => {
        setSpaceshipVisible(true);
        setSpaceShipStart(false);
      }, 2500);

      setTimeout(() => {
        setAirplaneStart(true);
      }, 7000);
    }
  }, [mode]);

  return (
    <div className="flex fixed inset-0 z-[50] justify-center items-center animate-ship">
      <div
        className={`absolute w-full h-full transition-all duration-7000 ease-in-out
          ${
            airplaneVisible
              ? "translate-y-[30vh] z-20"
              : airplaneStart
                ? "translate-y-[-30vh] translate-x-[-90vw] rotate-[60deg] transition-none z-10"
                : "translate-y-[-10vh] translate-x-[-30vw] rotate-[-30deg] scale-0 z-10"
          }
          ${isStart ? "translate-y-[80vh] transition-none" : ""}
        `}
        data-testid="airplane-test-id"
      >
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 0.6, -3]} intensity={5} />
          <ShipModel
            model="./airplane.glb"
            lowSize={0.9}
            mediumSize={1}
            highSize={1.2}
          />
        </Canvas>
      </div>

      <div
        className={`absolute w-full h-full transition-all duration-5000 ease-in-out
          ${
            spaceshipVisible
              ? "translate-y-[25vh] z-20"
              : spaceShipStart
                ? "translate-y-[60vh] translate-x-[90vw] transition-none z-10"
                : "translate-y-[-20vh] translate-x-[30vw] rotate-[45deg] scale-0 z-10"
          }
        `}
        data-testid="spaceship-test-id"
      >
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, -0.6, -1]} intensity={1.5} />
          <ShipModel
            model="./spaceship.glb"
            lowSize={0.1}
            mediumSize={0.11}
            highSize={0.13}
          />
        </Canvas>
      </div>
    </div>
  );
}
