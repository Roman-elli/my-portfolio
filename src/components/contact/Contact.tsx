import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";
type ContactProps = {
  mode: "light" | "dark";
  isStart: boolean;
  isAnimating: boolean;
};

function Contact({ mode, isStart, isAnimating }: ContactProps) {
  return (
    <div
      className={`fixed bottom-0 left-[8vw] flex flex-col z-90 items-center space-y-4 duration-5000
        ${isStart ? "translate-y-[50%] opacity-0" : ""}
        `}
      data-testid="contact-bar-id"
    >
      <a
        href="https://github.com/Roman-elli"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer"
      >
        <FaGithub
          className={` w-[clamp(2rem,2.3vw,4vw)] h-auto hover:scale-110 ease-in-out drop-shadow-md hover:animate-contactButtonBounce
                ${mode === "light" ? "text-[#571111] drop-shadow-white/70 hover:text-white hover:drop-shadow-white" : " text-[#95C1F8] drop-shadow-yellow-400/70 hover:text-white hover:drop-shadow-yellow-400"}
                ${isAnimating ? "duration-2500" : "duration-400"}
                
                `}
          data-testid="git-icon-id"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/thales-romanelli/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer"
      >
        <FaLinkedin
          className={` w-[clamp(2rem,2.3vw,4vw)] h-auto hover:scale-110 ease-in-out drop-shadow-md hover:animate-contactButtonBounce
                ${mode === "light" ? "text-[#571111] drop-shadow-white/70 hover:text-white hover:drop-shadow-white" : " text-[#95C1F8] drop-shadow-yellow-400/70 hover:text-white hover:drop-shadow-yellow-400"}
                ${isAnimating ? "duration-2500" : "duration-400"}
                `}
          data-testid="linkedin-icon-id"
        />
      </a>

      <div
        className={`w-[4px] rounded-full duration-2500 transition-all ease-in-out h-[clamp(3rem,10vh,5rem)]
              ${mode === "light" ? "bg-[#571111]/60 shadow-[0_0_10px_#ffffff]" : "bg-[#60A5FA] shadow-[0_0_10px_#FACC15]"}
            `}
        data-testid="underbar-id"
      ></div>
    </div>
  );
}

export default Contact;
