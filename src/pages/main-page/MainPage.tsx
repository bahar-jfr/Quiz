import { useEffect, useState } from "react";
import { useOptionsContext } from "../../context/OptionsContext";

export function MainPage() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState<string[]>([]);

  useEffect(() => {
    if (optionsState.data && optionsState.data.length > 0) {
      setQuestion(optionsState.data[0].question);

      const correctAnswer = optionsState.data[0].correct_answer;
      const incorrectAnswes = optionsState.data[0].incorrect_answers;

      //combine correct and incorrect answers in one array
      const allChoices = [correctAnswer, ...incorrectAnswes];


//iterate over the array from the last element to the first 
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      };

      //randomize array / shuffle array
      const shuffledChoices = shuffleArray(allChoices);

      setChoices(shuffledChoices);
    }
  }, [optionsState.data]);

  console.log(optionsState.data[0]);

  return (
    <div className="bg-fuchsia-500 rounded-md text-white w-1/3 h-2/3">
      <h1>welcome</h1>
      <p>start</p>
      {question ? <p>{question}</p> : <p>loading</p>}
      <div className="flex flex-col">
        {" "}
        {choices.map((choice, index) => (
          <button key={index} className="bg-yellow-400">
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
