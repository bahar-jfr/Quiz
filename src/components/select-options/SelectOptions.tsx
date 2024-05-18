export function SelectOptions(){
    return(
       <div className="flex flex-col gap-4">
       <input type="number"/>
        <select>
            <option value="category">Category</option>
            <option value="25">Art</option>
            <option value="12">Music</option>
            <option value="32">Cartoon & Animations</option>
        </select>
        <select>
            <option value="difficulty">Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
       </div>
    )
}