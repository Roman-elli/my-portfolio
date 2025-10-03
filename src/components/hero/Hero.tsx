import { TypeAnimation } from "react-type-animation";
type BackgroundProps = {
  mode: "light" | "dark";
};

function Hero({ mode }: BackgroundProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 pt-[12%] z-8 fixed">
      <div className="flex flex-row gap-6 font-space items-baseline animate-scalePulse">
        <div
          className={`duration-5000 ease-linear text-shadow-lg text-balance text-[clamp(1.2rem,2vw,2rem)]
                    ${mode === "light" ? "text-black text-shadow-black/20" : "text-white text-shadow-white/40"}
                `}
          data-testid="hi-test-id"
        >
          Hi. I'm
        </div>
        <div
          className={`duration-5000 ease-linear text-shadow-lg  text-balance text-[clamp(1.5rem,3vw,2.5rem)]
                    ${mode === "light" ? "text-[#571111] text-shadow-black/20" : "text-[#60A5FA] text-shadow-white/40"}
                `}
          data-testid="name-test-id"
        >
          Thales Romanelli
        </div>
      </div>
      <div
        className={`font-space duration-5000 ease-linear text-balance
            text-shadow-lg text-[clamp(1.8rem,4vw,3rem)]
            ${mode === "light" ? "text-[#A87777] text-shadow-black/60" : "text-[#95C1F8] text-shadow-white/60"} 
            `}
        data-testid="writer-test-id"
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
