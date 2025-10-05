import { PiMoon, PiSunLight } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";

type HeaderProps = {
  mode: "light" | "dark";
  isAnimating: boolean;
  toggleMode: () => void;
  isStart: boolean;
};

function Header({ mode, isAnimating, toggleMode, isStart }: HeaderProps) {
  return (
    <div
      className={`flex flex-row w-full h-[14%] fixed z-100 duration-2500
    ${isStart ? "translate-y-[-20vh]" : ""}
    `}
      data-testid="header-id"
    >
      <div className="w-1/2 flex items-center pl-[5%]">
        <img
          src={"/my-logo.png"}
          alt="My logo"
          className="w-[8%] min-w-[3.7rem] max-w-[7rem] transition-all duration-900 rounded-full ease-in-out
          shadow-md shadow-yellow-400
          hover:shadow-white/40 hover:shadow-xl hover:scale-105
          "
          data-testid="logo-image-id"
        />
      </div>
      <div className="w-1/2 flex justify-end items-center gap-[3vw] pr-[clamp(40px,7vh,10%)]">
        <div>
          <button
            className="
              relative group flex items-center px-4 py-3 rounded-xl transition-all duration-700 overflow-hidden
              bg-indigo-400
              text-white
              hover:text-black/50 hover:shadow-indigo-400/70 hover:shadow-2xl
              shadow-md shadow-black/40
              active:scale-95
              "
            onClick={() => window.open("/my-cv.pdf", "_blank")}
            data-testid="download-button-id"
          >
            <span className="absolute top-[200%] left-0 w-full h-full bg-indigo-100 rounded-[50%] group-hover:top-0 transition-all ease-in-out duration-900 scale-150 z-0"></span>
            <div className="flex items-center gap-2 z-10 text-nowrap font-space text-[clamp(0.8rem,0.9vw,80px)] text-shadow-md text-shadow-black/15">
              <RxDownload className="w-[clamp(1.2rem,1.4vw,80px)] h-auto drop-shadow-md drop-shadow-black/15" />
              <span>Download CV</span>
            </div>
          </button>
        </div>
        <div>
          <button
            className="p-[30%] rounded-full transition-all duration-900 border
            hover:scale-110 hover:text-red-600 hover:shadow-red-500/70 hover:shadow-xl shadow-md shadow-gray-400/50
            disabled:rotate-360 disabled:opacity-20 disabled:hover:scale-80 disabled:scale-80 disabled:duration-1500
            bg-indigo-100 border-black/15
            "
            onClick={toggleMode}
            disabled={isAnimating}
            data-testid="light-dark-button-id"
          >
            <div className="relative w-6 h-6">
              <PiSunLight
                data-testid="sun-icon-id"
                size={24}
                className={`absolute transition-opacity duration-1000 ${
                  mode === "light" ? "opacity-100" : "opacity-0"
                }`}
              />
              <PiMoon
                data-testid="moon-icon-id"
                size={24}
                className={`absolute transition-opacity duration-1000 ${
                  mode === "dark" ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
