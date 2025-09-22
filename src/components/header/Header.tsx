import { PiMoon, PiSunLight } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import MyLogo from "./../../../public/my-logo.png";

type HeaderProps = {
  isLightMode: boolean;
  toggleMode: () => void;
};

function Header({ isLightMode, toggleMode }: HeaderProps) {
  return (
    <div className="flex flex-row w-full h-[13%]">
      <div className="w-1/2 flex items-center pl-[5%]">
        <img src={MyLogo} alt="My logo" className="w-1/12" />
      </div>
      <div className="w-1/2 flex justify-end items-center gap-[10%] pr-[5%]">
        <div>
          <button className="relative group flex items-center bg-indigo-400 gap-2 px-4 py-2 rounded-md  transition-all active:scale-95 overflow-hidden">
            <span
              className="
                            absolute top-[200%] left-0 w-full h-full
                            bg-indigo-200
                            rounded-[50%]
                            group-hover:top-0
                            transition-all duration-500
                            scale-150
                            z-0
                        "
            ></span>

            <div className="flex items-center gap-2 z-10 ">
              <RxDownload size={30} />
              <span>Download CV</span>
            </div>
          </button>
        </div>
        <div>
          <button
            className="p-[35%] bg-cyan-300  border border-black/20 rounded-xl shadow-cyan-400/50 shadow-lg"
            onClick={toggleMode}
          >
            {isLightMode ? <PiMoon size={24} /> : <PiSunLight size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
