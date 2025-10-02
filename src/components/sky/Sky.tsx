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
};

function Sky({ mode }: SkyProps) {
  const [sunVisible, setSunVisible] = useState(mode === "light");
  const [moonVisible, setMoonVisible] = useState(mode === "dark");

  const clouds: Cloud[] = [
    {
      src: cloudA,
      animate: "animate-cloudA",
      pt: "30%",
      pl: "25%",
      initialTranslate: "-200%",
    },
    {
      src: cloudB,
      animate: "animate-cloudB",
      pt: "18%",
      pl: "70%",
      initialTranslate: "200%",
    },
    {
      src: cloudC,
      animate: "animate-cloudC",
      pt: "19%",
      pl: "15%",
      initialTranslate: "-200%",
    },
    {
      src: cloudD,
      animate: "animate-cloudD",
      pt: "30%",
      pl: "60%",
      initialTranslate: "200%",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "5%",
      pl: "35%",
      initialTranslate: "-200%",
    },
    {
      src: cloudF,
      animate: "animate-cloudF",
      pt: "5%",
      pl: "70%",
      initialTranslate: "200%",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "5%",
      pl: "10%",
      initialTranslate: "-200%",
    },
    {
      src: cloudH,
      animate: "animate-cloudH",
      pt: "18%",
      pl: "50%",
      initialTranslate: "200%",
    },
  ];

  const back_clouds: Cloud[] = [
    {
      src: cloudA,
      animate: "animate-cloudB",
      pt: "10%",
      pl: "30%",
      initialTranslate: "-200%",
    },
    {
      src: cloudB,
      animate: "animate-cloudH",
      pt: "20%",
      pl: "40%",
      initialTranslate: "200%",
    },
    {
      src: cloudC,
      animate: "animate-cloudD",
      pt: "30%",
      pl: "70%",
      initialTranslate: "-200%",
    },
    {
      src: cloudD,
      animate: "animate-cloudA",
      pt: "20%",
      pl: "60%",
      initialTranslate: "200%",
    },
    {
      src: cloudE,
      animate: "animate-cloudE",
      pt: "30%",
      pl: "40%",
      initialTranslate: "-200%",
    },
    {
      src: cloudF,
      animate: "animate-cloudC",
      pt: "30%",
      pl: "20%",
      initialTranslate: "200%",
    },
    {
      src: cloudG,
      animate: "animate-cloudG",
      pt: "15%",
      pl: "50%",
      initialTranslate: "-200%",
    },
    {
      src: cloudH,
      animate: "animate-cloudF",
      pt: "10%",
      pl: "60%",
      initialTranslate: "200%",
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
          className={`flex w-full h-full fixed pt-[${cloud.pt}] pl-[${cloud.pl}] ${cloud.animate}`}
        >
          <img
            src={cloud.src}
            alt={`Cloud ${i + 1}`}
            className={`w-[6vw] h-[5vw] transition-all duration-3000 ease-in-out fixed animate-scalePulse drop-shadow-black/40 drop-shadow-md
                    ${sunVisible ? "opacity-40" : `translate-x-[${cloud.initialTranslate}] opacity-0`}`}
          />
        </div>
      ))}
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className={`flex w-full h-full fixed pt-[${cloud.pt}] pl-[${cloud.pl}] ${cloud.animate}`}
        >
          <img
            src={cloud.src}
            alt={`Cloud ${i + 1}`}
            className={`w-[12vw] h-[8vw] transition-all duration-2000 ease-in-out fixed animate-scalePulse drop-shadow-yellow-400/30 drop-shadow-lg
                    ${sunVisible ? "opacity-95" : `translate-x-[${cloud.initialTranslate}] opacity-0`}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Sky;
