import { useEffect, useState } from "react";
import { SelectOptions } from "../select-options/SelectOptions";

import { get } from "../../api/get/get";
import { useOptionsContext } from "../../context/OptionsContext";

export function SetupSection() {
  const [data, setData] = useState(null);
  const [start, setStart]=useState(false);
  const { optionsState, optionsDispatch } = useOptionsContext();

  useEffect(() => {
    if (start) {
      get(optionsState.amount,optionsState.category, optionsState.difficulty).then((res) => {
        console.log(res,optionsState.category, optionsState.difficulty)
        setData(res);
        setStart(false); // Reset the start state
      });
    }
  }, [start]);
    console.log(data);
 

  return (
    <div className="bg-dark_purple rounded-md  w-1/2 h-4/5">
      <h1>welcome</h1>
      <p>start</p>
      <SelectOptions />
      <button onClick={()=>setStart(true)}>start</button>
    </div>
  );
}
