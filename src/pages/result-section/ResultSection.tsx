import { useOptionsContext } from "../../context/OptionsContext";
import {   useThemeContext } from "../../context/ThemeContext";

export function ResultSection() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();

  const totalQuestions = optionsState.data.length;
  const correctAnswers = optionsState.correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;
  const formattedPercentage = +percentage.toFixed(2); // Round to 2 decimal places

  return (
    <div
      className={`rounded-md px-24 w-1/2 h-4/5 flex flex-col items-center gap-8 ${
        themeState.mode === "dark" ? "bg-dark_main_box text-white" : "bg-light_main_box text-light_text"
      }`}
    >
      {formattedPercentage >= 50 ? <p>Good job</p> : <p>Try More</p>}
      <div>Your Score {`${formattedPercentage}%`}</div>
      <button onClick={() => optionsDispatch({ type: "CHANGE_PAGE", payload: 1 })}>
        Again
      </button>
    </div>
  );
}
