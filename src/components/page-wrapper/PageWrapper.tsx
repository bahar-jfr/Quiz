import { useThemeContext } from "../../context/ThemeContext";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import { SetupSection } from "../../pages/setup-section/SetupSection";
import { useOptionsContext } from "../../context/OptionsContext";
import { IntroSection } from "../../pages/intro-section/IntroSection";
import {  MainSection } from "../../pages/main-section/MainSection";
import { ResultSection } from "../../pages/result-section/ResultSection";

export function PageWrapper() {
  const { themeState, themeDispatch } = useThemeContext();
  const { optionsState } = useOptionsContext();
  const toggleMode = () => {
    themeDispatch({
      type: "CHANGE_THEME",
      payload: themeState.mode === "dark" ? "light" : "dark",
    });
  };

  return (
    <div
      className={`flex flex-col items-center gap-8 h-screen  ${
        themeState.mode === "dark" ? "bg-dark_root" : "bg-light_root"
      }`}
    >
      <div className="text-left pt-6 px-8 w-full ">
        <MdOutlineBrightnessMedium
          onClick={toggleMode}
          className={themeState.mode === "dark" ? "invert size-6" : "invert-20 size-6"}
        />
      </div>

      {optionsState.page === 0 ? (
        <IntroSection />
      ) : optionsState.page === 1 ? (
        <SetupSection />
      ) : optionsState.page === 2 ? (
        <MainSection />
      ) :optionsState.page ===3?(
        <ResultSection/>
      )
       : null}
    </div>
  );
}
