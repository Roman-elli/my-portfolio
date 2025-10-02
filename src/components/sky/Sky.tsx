import { useState, useEffect } from "react";
import Sun from "../../assets/images/sky/sun.png";
import Moon from "../../assets/images/sky/moon.png";
import cloudA from "../../assets/images/clouds/cloudA.png";
//import cloudB from "../../assets/images/clouds/cloudB.png"
//import cloudC from "../../assets/images/clouds/cloudC.png"
//import cloudD from "../../assets/images/clouds/cloudD.png"
//import cloudE from "../../assets/images/clouds/cloudE.png"
//import cloudF from "../../assets/images/clouds/cloudF.png"
//import cloudG from "../../assets/images/clouds/cloudG.png"
//import cloudH from "../../assets/images/clouds/cloudH.png"

type SkyProps = {
  mode: "light" | "dark";
};

function Sky({ mode }: SkyProps) {
  const [sunVisible, setSunVisible] = useState(mode === "light");
  const [moonVisible, setMoonVisible] = useState(mode === "dark");

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

      <div className="flex w-full h-full fixed pt-[10%] pl-[40%]">
        <img
          src={cloudA}
          alt="Bright white moon in the sky"
          className={`w-40 h-30 transition-all duration-2500 ease-in-out fixed
                    ${sunVisible ? "" : "translate-x-[-400%] opacity-0"}
                `}
        />
      </div>
    </div>
  );
}

export default Sky;
