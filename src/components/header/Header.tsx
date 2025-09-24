import { PiMoon, PiSunLight } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import MyLogo from "./../../../public/my-logo.png";

type HeaderProps = {
  mode: "light" | "dark" | "animating";
  toggleMode: () => void;
};

function Header({ mode, toggleMode }: HeaderProps) {
  return (
    <div className="flex flex-row w-full h-[14%] fixed">
      <div className="w-1/2 flex items-center pl-[5%]">
        <img
          src={MyLogo}
          alt="My logo"
          className="w-[10%] transition-all duration-900 rounded-full ease-in-out
          shadow-md shadow-yellow-400
          hover:shadow-white/40 hover:shadow-xl hover:scale-106
          "
        />
      </div>
      <div className="w-1/2 flex justify-end items-center gap-[8%] pr-[5%]">
        <div>
          <button
            className="
              relative group flex items-center px-4 py-3 rounded-xl transition-all duration-200 overflow-hidden
              bg-indigo-400
              text-white
              hover:scale-103 hover:text-black/50 hover:shadow-indigo-400/70 hover:shadow-2xl
              shadow-md shadow-black/40
              active:scale-98
              "
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
            className="p-[35%] rounded-full transition-all duration-400 active:scale-90 border
            hover:scale-110 hover:text-red-600 hover:shadow-red-500/50 hover:shadow-xl
            bg-indigo-100 border-black/20
            "
            onClick={toggleMode}
            disabled={mode === "animating"}
          >
            {mode === "light" && <PiSunLight size={24} />}
            {mode === "dark" && <PiMoon size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
