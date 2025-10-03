import { useState, useEffect } from "react";
import "./Sky.css";
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

type SkyProps = {
  mode: "light" | "dark";
};

type Cloud = {
  src: string;
  animate: string;
  pt: string;
  pl: string;
  initialTranslate: string;
  opacity: string;
};

function Sky({ mode }: SkyProps) {
  const [sunVisible, setSunVisible] = useState(mode === "light");
  const [moonVisible, setMoonVisible] = useState(mode === "dark");

  const clouds: Cloud[] = [
    {
      src: cloudA,
      animate: "animate-cloudA",
      pt: "pt-[30%]",
      pl: "pl-[25%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-86",
    },
    {
      src: cloudB,
      animate: "animate-cloudB",
      pt: "pt-[18%]",
      pl: "pl-[70%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-89",
    },
    {
      src: cloudC,
      animate: "animate-cloudC",
      pt: "pt-[19%]",
      pl: "pl-[15%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-78",
    },
    {
      src: cloudD,
      animate: "animate-cloudD",
      pt: "pt-[30%]",
      pl: "pl-[60%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-75",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "pt-[5%]",
      pl: "pl-[35%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-70",
    },
    {
      src: cloudF,
      animate: "animate-cloudF",
      pt: "pt-[5%]",
      pl: "pl-[70%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-85",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "pt-[5%]",
      pl: "pl-[10%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-80",
    },
    {
      src: cloudH,
      animate: "animate-cloudH",
      pt: "pt-[18%]",
      pl: "pl-[50%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-90",
    },
  ];

  const back_clouds: Cloud[] = [
    {
      src: cloudA,
      animate: "animate-cloudB",
      pt: "pt-[10%]",
      pl: "pl-[30%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-50",
    },
    {
      src: cloudB,
      animate: "animate-cloudH",
      pt: "pt-[20%]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-35",
    },
    {
      src: cloudC,
      animate: "animate-cloudD",
      pt: "pt-[25%]",
      pl: "pl-[70%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-45",
    },
    {
      src: cloudD,
      animate: "animate-cloudA",
      pt: "pt-[20%]",
      pl: "pl-[60%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-60",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "pt-[30%]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-30",
    },
    {
      src: cloudF,
      animate: "animate-cloudC",
      pt: "pt-[30%]",
      pl: "pl-[20%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-35",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "pt-[15%]",
      pl: "pl-[50%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-38",
    },
    {
      src: cloudH,
      animate: "animate-cloudF",
      pt: "pt-[10%]",
      pl: "pl-[60%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-30",
    },

    {
      src: cloudA,
      animate: "animate-cloudB",
      pt: "pt-[30%]",
      pl: "pl-[10%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-90",
    },
    {
      src: cloudB,
      animate: "animate-cloudH",
      pt: "pt-[2%]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-80",
    },
    {
      src: cloudC,
      animate: "animate-cloudD",
      pt: "pt-[20%]",
      pl: "pl-[85%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-60",
    },
    {
      src: cloudD,
      animate: "animate-cloudA",
      pt: "pt-[15%]",
      pl: "pl-[40%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-76",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "pt-[30%]",
      pl: "pl-[80%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-50",
    },
    {
      src: cloudF,
      animate: "animate-cloudC",
      pt: "pt-[3%]",
      pl: "pl-[20%]",
      initialTranslate: "translate-x-[200%]",
      opacity: "opacity-40",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "pt-[1%]",
      pl: "pl-[50%]",
      initialTranslate: "translate-x-[-200%]",
      opacity: "opacity-60",
    },
    {
      src: cloudH,
      animate: "animate-cloudF",
      pt: "pt-[12%]",
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
    <div className="flex w-full h-full fixed">
      <div className="flex items-center justify-center w-full h-full pb-[15%] animate-scalePulse">
        <img
          src={Sun}
          alt="Bright yellow sun in the sky"
          className={`w-90 h-90 transition-all duration-2500 ease-in-out fixed drop-shadow-[0_0_80px_#FF4500]
                  ${sunVisible ? "" : "translate-y-[170%] opacity-20"}
                `}
        />

        <img
          src={Moon}
          alt="Bright white moon in the sky"
          className={`w-90 h-90 transition-all duration-2500 ease-in-out fixed
                  ${moonVisible ? "drop-shadow-[0_0_80px_#7F9CF5]" : "translate-y-[170%] drop-shadow-none opacity-50"}
                `}
        />
      </div>
      {back_clouds.map((cloud, i) => (
        <div
          key={i}
          className={`flex w-full h-full fixed ${cloud.pt} ${cloud.pl} ${cloud.animate}`}
        >
          <img
            src={cloud.src}
            alt={`Cloud back ${i + 1}`}
            className={`w-[6vw] h-[9vh] transition-all duration-2000 ease-in-out fixed animate-scalePulse drop-shadow-black/40 drop-shadow-md
              ${sunVisible ? `${cloud.opacity}` : `${cloud.initialTranslate} opacity-0`}`}
          />
        </div>
      ))}

      {clouds.map((cloud, i) => (
        <div
          key={i}
          className={`flex w-full h-full fixed ${cloud.pt} ${cloud.pl} ${cloud.animate}`}
        >
          <img
            src={cloud.src}
            alt={`Cloud ${i + 1}`}
            className={`w-[12vw] h-[15vh] transition-all duration-3000 ease-in-out fixed animate-scalePulse drop-shadow-yellow-400/30 drop-shadow-lg
              ${sunVisible ? `${cloud.opacity}` : `${cloud.initialTranslate} opacity-0`}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Sky;
