import { useState, useEffect } from "react";
import "./Sky.css";
import Clouds from "./../ui/cloud/Clouds.tsx";
import Sun from "../../assets/images/sky/sun.png";
import Moon from "../../assets/images/sky/moon.png";
import cloudA from "../../assets/images/clouds/cloudA.png";
import cloudB from "../../assets/images/clouds/cloudB.png";
import cloudC from "../../assets/images/clouds/cloudC.png";
import cloudD from "../../assets/images/clouds/cloudD.png";
import cloudE from "../../assets/images/clouds/cloudE.png";
import cloudF from "../../assets/images/clouds/cloudF.png";
import cloudG from "../../assets/images/clouds/cloudG.png";
import cloudH from "../../assets/images/clouds/cloudH.png";

export type SkyProps = {
  mode: "light" | "dark";
  isStart: boolean;
};

export type Cloud = {
  src: string;
  animate: string;
  pt: string;
  pl: string;
  initialTranslate: string;
  opacity: string;
};

function Sky({ mode, isStart }: SkyProps) {
  const [sunVisible, setSunVisible] = useState(mode === "light");
  const [moonVisible, setMoonVisible] = useState(mode === "dark");

  const clouds: Cloud[] = [
    {
      src: cloudA,
      animate: "animate-cloudA",
      pt: "pt-[63vh]",
      pl: "pl-[25%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-100",
    },
    {
      src: cloudB,
      animate: "animate-cloudB",
      pt: "pt-[38vh]",
      pl: "pl-[70%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-89",
    },
    {
      src: cloudC,
      animate: "animate-cloudC",
      pt: "pt-[40vh]",
      pl: "pl-[15%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-90",
    },
    {
      src: cloudD,
      animate: "animate-cloudD",
      pt: "pt-[63vh]",
      pl: "pl-[60%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-75",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "pt-[11vh]",
      pl: "pl-[35%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-100",
    },
    {
      src: cloudF,
      animate: "animate-cloudF",
      pt: "pt-[11vh]",
      pl: "pl-[70%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-85",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "pt-[11vh]",
      pl: "pl-[10%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-86",
    },
    {
      src: cloudH,
      animate: "animate-cloudH",
      pt: "pt-[38vh]",
      pl: "pl-[50%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-90",
    },
  ];

  const back_clouds: Cloud[] = [
    {
      src: cloudA,
      animate: "animate-cloudB",
      pt: "pt-[21vh]",
      pl: "pl-[30%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-70",
    },
    {
      src: cloudB,
      animate: "animate-cloudH",
      pt: "pt-[42vh]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-86",
    },
    {
      src: cloudC,
      animate: "animate-cloudD",
      pt: "pt-[52vh]",
      pl: "pl-[70%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-55",
    },
    {
      src: cloudD,
      animate: "animate-cloudA",
      pt: "pt-[42vh]",
      pl: "pl-[60%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-80",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "pt-[63vh]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-70",
    },
    {
      src: cloudF,
      animate: "animate-cloudC",
      pt: "pt-[63vh]",
      pl: "pl-[20%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-45",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "pt-[31vh]",
      pl: "pl-[50%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-60",
    },
    {
      src: cloudH,
      animate: "animate-cloudF",
      pt: "pt-[21vh]",
      pl: "pl-[60%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-46",
    },

    {
      src: cloudA,
      animate: "animate-cloudB",
      pt: "pt-[63vh]",
      pl: "pl-[10%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-90",
    },
    {
      src: cloudB,
      animate: "animate-cloudH",
      pt: "pt-[4vh]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-80",
    },
    {
      src: cloudC,
      animate: "animate-cloudD",
      pt: "pt-[42vh]",
      pl: "pl-[85%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-80",
    },
    {
      src: cloudD,
      animate: "animate-cloudA",
      pt: "pt-[31vh]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-76",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "pt-[63vh]",
      pl: "pl-[80%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-70",
    },
    {
      src: cloudF,
      animate: "animate-cloudC",
      pt: "pt-[7vh]",
      pl: "pl-[20%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-80",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "pt-[2vh]",
      pl: "pl-[50%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-60",
    },
    {
      src: cloudH,
      animate: "animate-cloudF",
      pt: "pt-[25vh]",
      pl: "pl-[80%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-70",
    },
  ];

  useEffect(() => {
    if (mode === "light") {
      setMoonVisible(false);
      setTimeout(() => setSunVisible(true), 2500);
    } else {
      setSunVisible(false);
      setTimeout(() => setMoonVisible(true), 2500);
    }
  }, [mode]);

  return (
    <>
      <div className="flex items-center justify-center w-full h-full fixed pb-[15%] animate-scalePulse z-40">
        <img
          src={Sun}
          alt="Bright yellow sun in the sky"
          className={`w-[45vh] h-auto transition-all duration-2500 ease-in-out fixed drop-shadow-[0_0_50px_#FF4500]
                  ${sunVisible && !isStart ? "" : "translate-y-[150%] drop-shadow-none opacity-0"}
                `}
          data-testid="sun-id"
        />

        <img
          src={Moon}
          alt="Bright white moon in the sky"
          className={`w-[45vh] h-auto transition-all duration-2500 ease-in-out fixed
                  ${moonVisible ? "drop-shadow-[0_0_50px_#7F9CF5]" : "translate-y-[150%] drop-shadow-none opacity-0"}
                `}
          data-testid="moon-id"
        />
      </div>
      <div className="fixed z-50">
        {back_clouds.map((cloud, i) => (
          <Clouds key={i} cloud={cloud} visible={sunVisible && !isStart} back />
        ))}

        {clouds.map((cloud, i) => (
          <Clouds key={i} cloud={cloud} visible={sunVisible && !isStart} />
        ))}
      </div>
      <div
        className={`fixed w-full h-full duration-2500 ease-in-out 
        ${moonVisible ? "opacity-90" : "opacity-0"}`}
        data-testid="night-sky-id"
      >
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
    </>
  );
}

export default Sky;
