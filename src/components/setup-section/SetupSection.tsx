import { useEffect, useState } from "react";
import { SelectOptions } from "../select-options/SelectOptions";

import { get } from "../../api/get/get";
import { useOptionsContext } from "../../context/OptionsContext";

export function SetupSection() {
  const [data, setData] = useState(null);
  const [start, setStart] = useState(false);
  const { optionsState, optionsDispatch } = useOptionsContext();

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
    <div className="bg-purple-600 rounded-md  w-1/2 h-4/5">
      <h1>welcome</h1>
      <p>start</p>
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
