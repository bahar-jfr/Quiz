import { useThemeContext } from "../../context/ThemeContext";
import { IntroSection } from "../intro-section/IntroSection";
import { MdOutlineBrightnessMedium } from "react-icons/md";

export function PageWrapper() {
  const { themeState, themeDispatch } = useThemeContext();
  console.log(themeState);
  const toggleMode = () => {
    themeDispatch({
      type: "CHANGE_THEME",
      payload: themeState.mode === "dark" ? "light" : "dark",
    });
  };

  return (
    <div className={`flex flex-col items-center gap-12 h-screen  ${themeState.mode === 'dark' ? "bg-gray-600" :"bg-slate-100"}`}>
      <div className="text-left py-4 px-8 w-full">
        <MdOutlineBrightnessMedium
          onClick={toggleMode}
          className={themeState.mode === "dark" ? "invert" : "invert-20"
    }
        />
      </div>
      <IntroSection />
    </div>
  );
}
