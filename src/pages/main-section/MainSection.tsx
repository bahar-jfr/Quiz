import { useEffect, useState } from "react";
import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";

export function MainSection() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (optionsState.data && optionsState.data.length > 0) {
      setQuestion(optionsState.data[index].question);

      const correctAnswer = optionsState.data[index].correct_answer;
      const incorrectAnswes = optionsState.data[index].incorrect_answers;

      //combine correct and incorrect answers in one array
      const allChoices = [correctAnswer, ...incorrectAnswes];

      //iterate over the array from the last element to the first
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      //randomize array / shuffle array
      const shuffledChoices = shuffleArray(allChoices);

      setChoices(shuffledChoices);
    }
  }, [optionsState.data, index]);

  console.log(optionsState.data[index]);

  const handleSelectChoice = (choosen) => {
    if (index + 1 === optionsState.data.length) {
      optionsDispatch({ type: "CHANGE_PAGE", payload: 3 });
    } else {
      setIndex(index + 1);
    }

    if (choosen === optionsState.data[index].correct_answer) {
      optionsDispatch({
        type: "SET_CORRECT_ANSWERS",
        payload: optionsState.correctAnswers + 1,
      });
    }
  };

  return (
    <div
      className={` rounded-md flex flex-col gap-6 items-center pt-8 w-1/2 h-4/5 ${
        themeState.mode === "dark"
          ? "bg-dark_main_box text-white"
          : "bg-light_main_box text-light_text"
      }`}
    >
      <p className="font-bold text-2xl"> Quiz</p>
      
   <div className={`  rounded-md w-5/6 px-3 py-3 ${themeState.mode === "dark" ? "bg-dark_question" : "bg-light_question"}`}>   {question ? <p >{question}</p> : <p>Loading ...</p>}</div>
      <div className="flex flex-col gap-2.5 px-24 w-full">
        {" "}
        {choices.map((choice, index) => (
          <button
            key={index}
            className={`flex rounded-md py-1.5 px-3  ${  themeState.mode === "dark" ? "bg-dark_btn" : "bg-light_btn"}`
            
            }
            onClick={() => handleSelectChoice(choice)}
          >
            {index+1}. {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
