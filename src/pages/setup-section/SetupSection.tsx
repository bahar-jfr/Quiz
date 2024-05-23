import { useEffect, useState } from "react";
import { SelectOptions } from "../../components/select-options/SelectOptions";

import { get } from "../../api/get/get";
import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";

export function SetupSection() {
  const [data, setData] = useState(null);
  const [start, setStart] = useState(false);
  const { optionsState, optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();

  useEffect(() => {
    if (start) {
      if (!optionsState.valid) {
        optionsDispatch({
          type: "SET_INVALID_MESSAGE",
          payload: "Please Enter Number Between 5 And 50",
        });
        setStart(false);
      } else {
        get(
          optionsState.amount,
          optionsState.category,
          optionsState.difficulty
        ).then((res) => {
          setData(res);
          optionsDispatch({ type: "SET_DATA", payload: res.results });
          setStart(false); // Reset the start state
        });
        optionsDispatch({ type: "CHANGE_PAGE", payload: 2 });
      }
    }
  }, [start, optionsState.valid, optionsDispatch]);

  return (
    <div className={` rounded-md px-24 w-1/2 h-4/5 flex flex-col items-center gap-8 ${
      themeState.mode === "dark" ? "bg-dark_main_box text-white"
      : "bg-light_main_box text-light_text"
    }`}>
      
      <h1>Setup Quiz</h1>
      
      <SelectOptions />
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        start
      </button>
    </div>
  );
}
