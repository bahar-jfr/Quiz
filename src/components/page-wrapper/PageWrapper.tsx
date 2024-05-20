import { useThemeContext } from "../../context/ThemeContext";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import { SetupSection } from "../setup-section/SetupSection";
import { useOptionsContext } from "../../context/OptionsContext";
import { IntroSection } from "../intro-section/IntroSection";
import { MainPage } from "../../pages/main-page/MainPage";

export function PageWrapper() {
  const { themeState, themeDispatch } = useThemeContext();
  const { optionsState, optionsDispatch } = useOptionsContext();
  const toggleMode = () => {
    themeDispatch({
      type: "CHANGE_THEME",
      payload: themeState.mode === "dark" ? "light" : "dark",
    });
  };

  return (
    <div
      className={`flex flex-col items-center gap-8 h-screen  ${
        themeState.mode === "dark" ? "bg-gray-600" : "bg-slate-100"
      }`}
    >
      <div className="text-left pt-4 px-8 w-full">
        <MdOutlineBrightnessMedium
          onClick={toggleMode}
          className={themeState.mode === "dark" ? "invert" : "invert-20"}
        />
      </div>
      
      {optionsState.page === 0 ? (
        <IntroSection />
      ) : optionsState.page === 1 ? (
        <SetupSection />
      ) : optionsState.page === 2 ? (
        <MainPage />
      ) : null}
    </div>
  );
}
