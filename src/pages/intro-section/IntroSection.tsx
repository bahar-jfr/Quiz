import  { useState } from "react";
import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";
import { TitleLogo } from "../../components/title-logo/TitleLogo";
import { BsFillRocketFill } from "react-icons/bs";

export function IntroSection() {
  const [start, setStart] = useState(false);
  const { optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();

  return (
    <div
      className={`flex flex-col items-center pt-12 gap-32 rounded-md w-1/2 h-4/5 ${
        themeState.mode === "dark"
          ? "bg-dark_main_box text-white shadow-dark"
          : "bg-light_main_box text-light_text shadow-light"
      }`}
    >
      <TitleLogo />
      <h1 className="text-3xl fontOrbitron font-semibold mb-12">
        Welcome To Quiz App
      </h1>
<div className="flex flex-col items-center gap-4">
      
      <button
        className="font-semibold fontOrbitron text-lg"
        onClick={() => {
          setStart(true);
          setTimeout(() => {
            optionsDispatch({ type: "CHANGE_PAGE", payload: 1 });
          }, 2000); // Duration of the animation
        }}
      >
        Get Start
      </button>
      <BsFillRocketFill  className={`w-10 h-10 duration-2000 ease-in-out ${
          start ? "animate-rocket" : ""
        }`}/>
</div>
    
    </div>
  );
}