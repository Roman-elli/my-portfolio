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
        <img
          src={MyLogo}
          alt="My logo"
          className="w-1/12 hover:w-1/11 transition-all duration-300"
        />
      </div>
      <div className="w-1/2 flex justify-end items-center gap-[10%] pr-[5%]">
        <div>
          <button className="relative group flex items-center bg-indigo-200 px-4 py-3 rounded-xl hover:scale-103 transition-all active:scale-98 overflow-hidden hover:text-orange-500">
            <span className=" absolute top-[200%] left-0 w-full h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-700 scale-150 z-0"></span>

            <div className="flex items-center gap-2 z-10">
              <RxDownload size={30} />
              <span>Download CV</span>
            </div>
          </button>
        </div>
        <div>
          <button
            className="p-[35%] bg-indigo-200 rounded-full transition-all duration-300 hover:scale-108  hover:shadow-white hover:shadow hover:text-orange-500 active:scale-95"
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
