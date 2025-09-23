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
          className="w-1/12 hover:w-1/11 transition-all duration-300"
        />
      </div>
      <div className="w-1/2 flex justify-end items-center gap-[8%] pr-[5%]">
        <div>
          <button
            className="
              relative group flex items-center px-4 py-3 rounded-xl transition-all duration-400 overflow-hidden
              bg-indigo-400
              text-white
              hover:scale-103 hover:text-black/50
              active:scale-95
              "
          >
            <span className="absolute top-[200%] left-0 w-full h-full bg-white rounded-[50%] group-hover:top-0 transition-all ease-in-out duration-800 scale-150 z-0"></span>

            <div className="flex items-center gap-2 z-10">
              <RxDownload size={30} />
              <span>Download CV</span>
            </div>
          </button>
        </div>
        <div>
          <button
            className="p-[35%] bg-white rounded-full transition-all duration-200 hover:scale-110 hover:text-white hover:bg-indigo-400 active:scale-100"
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
