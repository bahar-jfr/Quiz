import { useEffect, useState } from "react";
import { SelectOptions } from "../../components/select-options/SelectOptions";

import { get } from "../../api/get/get";
import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";
import { TitleLogo } from "../../components/title-logo/TitleLogo";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export function SetupSection() {
  const [start, setStart] = useState(false);
  const { optionsState, optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();

  useEffect(() => {
    if (start) {
      if (!optionsState.valid.amount) {
        optionsDispatch({
          type: "SET_AMOUNT_INVALID_MESSAGE",
          payload: "Please Enter Number Between 5 And 50",
        });
        setStart(false);
      }
      if (!optionsState.valid.category) {
        optionsDispatch({
          type: "SET_CATEGORY_INVALID_MESSAGE",
          payload: "Please Choose A Category",
        });
        setStart(false);
      }
      if (!optionsState.valid.difficulty) {
        optionsDispatch({
          type: "SET_DIFFICULTY_INVALID_MESSAGE",
          payload: "Please Choose A Difficulty",
        });
        setStart(false);
      } else {
        get(
          optionsState.amount,
          optionsState.category,
          optionsState.difficulty
        ).then((res) => {
          optionsDispatch({ type: "SET_DATA", payload: res.results });
          setStart(false); // Reset the start state
        });
        optionsDispatch({ type: "CHANGE_PAGE", payload: 2 });
      }
    }
  }, [start, optionsState.valid.amount, optionsDispatch]);

  return (
    <div
      className={` rounded-md px-24 w-1/2 h-4/5 flex flex-col items-center pt-12 gap-16 ${
        themeState.mode === "dark"
          ? "bg-dark_main_box text-white"
          : "bg-light_main_box text-light_text"
      }`}
    >
      <TitleLogo />
      <div className="flex flex-col items-center gap-8 w-full">
        {" "}
        <h1 className="text-lg">Setup Quiz</h1>
        <SelectOptions />
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => setStart(true)} className="pt-6 text-xl">
            start
          </button>
          <IoMdArrowDroprightCircle className="animate-bounce h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
