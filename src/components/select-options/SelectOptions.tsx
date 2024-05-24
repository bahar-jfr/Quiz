
import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";

export function SelectOptions() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();
  const handleCategory = (selected:string) => {
    optionsDispatch({ type: "CHANGE_CATEGORY", payload: selected });
  };

  const handleDifficulty = (selected:string) => {
    optionsDispatch({ type: "CHANGE_DIFFICULTY", payload: selected });
  };

  const handleAmount = (selected:string) => {
    optionsDispatch({ type: "CHANGE_AMOUNT", payload: +selected });
    if (+selected <= 50 && +selected >= 5) {
      optionsDispatch({type:"IS_VALID",payload:true})
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor="number" className="flex flex-col gap-0.5">
        Number of Question
        <input
          type="number"
          id="number"
          onChange={(e) => {handleAmount(e.target.value)
            if (+e.target.value <= 50 && +e.target.value >= 5) {
              optionsDispatch({type:"IS_VALID",payload:true})
            }
          } }
          className={`rounded-md py-1.5 px-3.5 outline-none  ${themeState.mode === "dark" ? "bg-dark_select text-dark_text" : "bg-light_select"}`}
        />
        <p className="text-red-700 text-xs">{optionsState.invalidMessage}</p>
      </label>
      <label htmlFor="category" className="flex flex-col gap-0.5">
        Category
        <select className={`rounded-md py-1.5 px-3 ${themeState.mode === "dark" ? "bg-dark_select text-dark_text" : "bg-light_select"}`}onChange={(e) => handleCategory(e.target.value)}>
          <option value="category">Category</option>
          <option value="25">Art</option>
          <option value="12">Music</option>
          <option value="32">Cartoon & Animations</option>
        </select>
      </label>
      <label htmlFor="difficulty" className="flex flex-col gap-0.5">
        Difficulty
        <select className={`rounded-md py-1.5 px-3 ${themeState.mode === "dark" ? "bg-dark_select text-dark_text" : "bg-light_select"}`}onChange={(e) => handleDifficulty(e.target.value)}>
          <option value="difficulty">Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    </div>
  );
}
