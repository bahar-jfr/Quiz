import { useEffect, useState } from "react";
import { useOptionsContext } from "../../context/OptionsContext";
import { useThemeContext } from "../../context/ThemeContext";
import { TitleLogo } from "../../components/title-logo/TitleLogo";
import { CgSpinner } from "react-icons/cg";


export function MainSection() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  const { themeState } = useThemeContext();
  const [question, setQuestion] = useState<string>("");
  const [choices, setChoices] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);

  type QuestionData = {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };

  //iterate over the array from the last element to the first
  const shuffleArray = (array: string[]): string[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (optionsState.data && optionsState.data.length > 0) {
      const currentQuestion: QuestionData = optionsState.data[index];
      setQuestion(currentQuestion.question);

      const correctAnswer = currentQuestion.correct_answer;
      const incorrectAnswers = currentQuestion.incorrect_answers;

      const allChoices = [correctAnswer, ...incorrectAnswers];
      const shuffledChoices = shuffleArray(allChoices);

      setChoices(shuffledChoices);
    }
  }, [optionsState.data, index]);

  const handleSelectChoice = (choosen: string) => {
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
      className={` rounded-md flex flex-col gap-8 items-center pt-12 w-1/2 h-4/5 ${
        themeState.mode === "dark"
        ? "bg-dark_main_box text-white shadow-dark"
        : "bg-light_main_box text-light_text shadow-light"
      }`}
    >
      <TitleLogo/>

      <div
        className={`  rounded-md w-5/6 px-3 py-3 mt-4 ${
          themeState.mode === "dark" ? "bg-dark_question" : "bg-light_question"
        }`}
      >
        {" "}
        {question ? <p>{question}</p> : <p className="flex items-center gap-2"><CgSpinner className="animate-spin" /> Loading ...</p>}
      </div>
      <div className="flex flex-col gap-2.5 px-24 w-full">
        {" "}
        {choices.map((choice, index) => (
          <button
            key={index}
            className={`flex rounded-md py-1.5 px-3  ${
              themeState.mode === "dark" ? "bg-dark_btn" : "bg-light_btn"
            }`}
            onClick={() => handleSelectChoice(choice)}
          >
            {index + 1}. {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
