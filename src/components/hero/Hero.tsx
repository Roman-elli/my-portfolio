import { TypeAnimation } from "react-type-animation";
type BackgroundProps = {
  mode: "light" | "dark";
};

function Hero({ mode }: BackgroundProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 pt-[12%] z-10">
      <div className="flex flex-row gap-6 font-space items-baseline">
        <div
          className={`duration-3000 ease-linear text-shadow-lg text-balance text-[2rem]
                    ${mode === "light" ? "text-black text-shadow-black/20" : "text-white text-shadow-white/40"}
                `}
        >
          Hi. I'm
        </div>
        <div
          className={`duration-3000 ease-linear text-shadow-lg animate-scalePulse text-balance text-[2.5rem]
                    ${mode === "light" ? "text-[#571111] text-shadow-black/20" : "text-[#60A5FA] text-shadow-white/40"}
                `}
        >
          Thales Romanelli
        </div>
      </div>
      <div
        className={`font-space duration-3000 ease-linear text-balance
            text-shadow-lg text-[3rem]
            ${mode === "light" ? "text-[#A87777] text-shadow-black/40" : "text-[#95C1F8] text-shadow-white/60"} 
            `}
      >
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "AI & Data Engineer",
            2000,
            "Software Engineer",
            3500,
            "Full stack developer",
            500,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
export default Hero;
