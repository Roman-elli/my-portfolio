import { PiMoon, PiSunLight } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";

type HeaderProps = {
  mode: "light" | "dark";
  isAnimating: boolean;
  toggleMode: () => void;
};

function Header({ mode, isAnimating, toggleMode }: HeaderProps) {
  return (
    <div className="flex flex-row w-full h-[14%] fixed z-10">
      <div className="w-1/2 flex items-center pl-[5%]">
        <img
          src={"/my-logo.png"}
          alt="My logo"
          className="w-[8%] min-w-15 max-w-17 transition-all duration-900 rounded-full ease-in-out
          shadow-md shadow-yellow-400
          hover:shadow-white/40 hover:shadow-xl hover:scale-106
          "
          data-testid="logo-image-id"
        />
      </div>
      <div className="w-1/2 flex justify-end items-center gap-[8%] pr-[5%]">
        <div>
          <button
            className="
              relative group flex items-center px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden
              bg-indigo-400
              text-white
              hover:scale-103 hover:text-black/50 hover:shadow-indigo-400/70 hover:shadow-2xl
              shadow-md shadow-black/40
              active:scale-98
              "
            onClick={() => window.open("/my-cv.pdf", "_blank")}
            data-testid="download-button-id"
          >
            <span className="absolute top-[200%] left-0 w-full h-full bg-indigo-100 rounded-[50%] group-hover:top-0 transition-all ease-in-out duration-900 scale-150 z-0"></span>
            <div className="flex items-center gap-2 z-10">
              <RxDownload size={30} />
              <span>Download CV</span>
            </div>
          </button>
        </div>
        <div>
          <button
            className="p-[35%] rounded-full transition-all duration-600 border
            hover:scale-110 hover:text-red-600 hover:shadow-red-500/50 hover:shadow-xl
            disabled:rotate-360 disabled:opacity-20 disabled:hover:scale-80 disabled:scale-80 disabled:duration-1500
            bg-indigo-100 border-black/20
            "
            onClick={toggleMode}
            disabled= {isAnimating}
            data-testid="light-dark-button-id"
          >
            {mode === "light" && (
              <PiSunLight data-testid="sun-icon-id" size={24} />
            )}
            {mode === "dark" && <PiMoon data-testid="moon-icon-id" size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
