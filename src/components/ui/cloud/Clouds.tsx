import type { Cloud as CloudType } from "./../../sky/Sky.tsx";
import React from "react";

interface CloudProps {
  cloud: CloudType;
  visible: boolean;
  back?: boolean;
}

const Clouds: React.FC<CloudProps> = ({ cloud, visible, back = false }) => {
  return (
    <div className={`fixed ${cloud.pt} ${cloud.pl} ${cloud.animate}`}>
      <img
        src={cloud.src}
        alt={back ? "Clouds back" : "Clouds"}
        className={`h-auto transition-all ease-in-out animate-scalePulse drop-shadow-yellow-400/30
          ${back ? "w-[clamp(40px,6vw,140px)] drop-shadow-md duration-2000" : "w-[clamp(105px,12vw,200px)] drop-shadow-lg duration-3000"}
          ${visible ? cloud.opacity : `${cloud.initialTranslate} opacity-0`}
        `}
        data-testid="cloud-id"
      />
    </div>
  );
};

export default Clouds;
