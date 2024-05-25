import { TitleLogo } from "../../components/title-logo/TitleLogo";
import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";
import { VscDebugRestart } from "react-icons/vsc";
import { BsEmojiDizzyFill } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";

export function ResultSection() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();

  const totalQuestions = optionsState.data.length;
  const correctAnswers = optionsState.correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;
  const formattedPercentage = +percentage.toFixed(2); // Round to 2 decimal places

  return (
    <div
      className={`rounded-md px-24 w-1/2 h-4/5 flex flex-col items-center pt-12 gap-10 ${
        themeState.mode === "dark"
        ? "bg-dark_main_box text-white shadow-dark"
        : "bg-light_main_box text-light_text shadow-light"
      }`}
    >
      <TitleLogo />

     <div className="flex flex-col gap-4 items-center">
     {formattedPercentage >= 50 ? (
        <BsEmojiSunglassesFill className={`h-32 w-32 bg-white  rounded-full mt-4 ${themeState.mode === "dark" ?"text-dark_select" : "text-light_select" }`} />
      ) : (
        <BsEmojiDizzyFill  className={`h-32 w-32 bg-white  rounded-full mt-4 ${themeState.mode === "dark" ?"text-dark_select" : "text-light_select" }`} />
      )}

      {formattedPercentage >= 50 ? <p className="text-lg">Good job</p> : <p className="text-lg">Try More</p>}
     </div>
     <div className="mt-12 mb-3 text-2xl">Your Score {`${formattedPercentage}%`}</div>
      <button
        className={`flex items-center gap-2 text-xl py-2 px-4 hover:rounded-full  ${themeState.mode === "dark" ? "hover:bg-dark_hover" :"hover:bg-light_hover"} `}
        onClick={() => optionsDispatch({ type: "CHANGE_PAGE", payload: 1 })}
      >
        Again <VscDebugRestart />
      </button>
    </div>
  );
}
