import { useOptionsContext } from "../../context/OptionsContext";

export function SelectOptions() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  const handleCategory =(selected)=>{
    optionsDispatch({type:"CHANGE_CATEGORY",payload: selected })
  }
  
  const handleDifficulty=(selected)=>{
    optionsDispatch({type:"CHANGE_DIFFICULTY",payload: selected })
  }

  const handleAmount=(selected)=>{
    optionsDispatch({type:"CHANGE_AMOUNT",payload: selected })
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="number" className="flex flex-col">
        Number of Question
        <input type="number" id="number" onChange={(e)=>handleAmount(e.target.value)}/>
      </label>
      <label htmlFor="category" className="flex flex-col">
        Category
        <select onChange={(e)=>handleCategory(e.target.value)}>
          <option value="category">Category</option>
          <option value="25">Art</option>
          <option value="12">Music</option>
          <option value="32">Cartoon & Animations</option>
        </select>
      </label>
      <label htmlFor="difficulty" className="flex flex-col">
        Difficulty
        <select onChange={(e)=>handleDifficulty(e.target.value)} >
          <option value="difficulty">Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    </div>
  );
}
