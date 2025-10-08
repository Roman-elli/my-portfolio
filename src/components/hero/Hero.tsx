import { TypeAnimation } from "react-type-animation";
type BackgroundProps = {
  mode: "light" | "dark";
  isStart: boolean;
};

function Hero({ mode, isStart }: BackgroundProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] gap-5 pt-[25vh]  sm:pt-[28vh] md:pt-[20vh] z-80 fixed">
      <div className="flex flex-row gap-3 font-space items-baseline animate-scalePulse">
        <div
          className={`duration-5000 ease-linear text-shadow-lg text-balance text-[clamp(1.5rem,2vw,2rem)]
                    ${mode === "light" ? "text-rose-950/90" : "text-white"}
                    ${isStart ? "opacity-0" : ""}
                `}
          data-testid="hi-test-id"
        >
          Hi. I'm
        </div>
        <div
          className={`duration-5000 ease-linear text-shadow-lg  text-balance text-[clamp(1.8rem,3vw,2.5rem)]
                    ${mode === "light" ? "text-rose-950/90" : "text-[#60A5FA]"}
                    ${isStart ? "opacity-0" : ""}
                `}
          data-testid="name-test-id"
        >
          Thales Romanelli
        </div>
      </div>
      <div
        className={`font-space duration-5000 ease-linear text-balance
            text-shadow-lg text-[clamp(1.8rem,4vw,3rem)]
            ${mode === "light" ? "text-white/80 text-shadow-black/60" : "text-[#95C1F8]"} 
            ${isStart ? "opacity-0" : ""}
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
