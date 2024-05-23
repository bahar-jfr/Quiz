import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";

export function IntroSection() {
  const {  optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();
  return (
    <div className= {`flex flex-col items-center justify-center gap-24  rounded-md w-1/2 h-4/5 ${
      themeState.mode === "dark" ? "bg-dark_main_box text-white"
      : "bg-light_main_box text-light_text"
    }`}>
      <h1 className="text-3xl font-semibold">Welcome To Quiz App</h1>
      
      <button 
      className="font-semibold text-lg"
        onClick={() => {
          optionsDispatch({ type: "CHANGE_PAGE", payload: 1 });
        }}
      >
       Get Start
      </button>
    </div>
  );
}
