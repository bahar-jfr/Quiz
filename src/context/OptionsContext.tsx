import { ReactNode, createContext, useContext, useReducer } from "react";

type OptionsState = {
  amount: number;
  category: string;
  difficulty: string;
  data: object[];
  valid: { amount: boolean; category: boolean; difficulty: boolean };
  invalidMessage: { amount: string; category: string; difficulty: string };
  page: number;
  correctAnswers: number;
};

type OptionsAction =
  | { type: "CHANGE_CATEGORY"; payload: string }
  | { type: "CHANGE_DIFFICULTY"; payload: string }
  | { type: "CHANGE_AMOUNT"; payload: number }
  | { type: "SET_DATA"; payload: object[] }
  | { type: "IS_AMOUNT_VALID"; payload: boolean }
  | { type: "IS_CATEGORY_VALID"; payload: boolean }
  | { type: "IS_DIFFICULTY_VALID"; payload: boolean }
  | { type: "SET_AMOUNT_INVALID_MESSAGE"; payload: string }
  | { type: "SET_CATEGORY_INVALID_MESSAGE"; payload: string }
  | { type: "SET_DIFFICULTY_INVALID_MESSAGE"; payload: string }
  | { type: "CHANGE_PAGE"; payload: number }
  | { type: "SET_CORRECT_ANSWERS"; payload: number };

type OptionsContextType = {
  optionsState: OptionsState;
  optionsDispatch: React.Dispatch<OptionsAction>;
};

const OptionsContext = createContext<OptionsContextType>({
  optionsState: {
    amount: 0,
    category: "",
    difficulty: "",
    data: [],
    valid: { amount: false, category: false, difficulty: false },
    invalidMessage: { amount: "", category: "", difficulty: "" },
    page: 0,
    correctAnswers: 0,
  },
  optionsDispatch: () => {},
});

const initialOptions :OptionsState= {
  amount: 0,
  category: "",
  difficulty: "",
  data: [],
  valid: { amount: false, category: false, difficulty: false },
  invalidMessage: { amount: "", category: "", difficulty: "" },
  page: 0,
  correctAnswers: 0,
};

export const useOptionsContext = () => useContext(OptionsContext);

export function optionsReducer(state: OptionsState, action: OptionsAction) {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { ...state, category: action.payload };
    case "CHANGE_DIFFICULTY":
      return { ...state, difficulty: action.payload };
    case "CHANGE_AMOUNT":
      return { ...state, amount: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "IS_AMOUNT_VALID":
      return { ...state, valid: { amount: action.payload } };
    case "IS_CATEGORY_VALID":
      return { ...state, valid: { category: action.payload } };
    case "IS_DIFFICULTY_VALID":
      return { ...state, valid: { difficulty: action.payload } };
    case "SET_AMOUNT_INVALID_MESSAGE":
      return {
        ...state,
        invalidMessage: { ...state.invalidMessage, amount: action.payload },
      };
    case "SET_CATEGORY_INVALID_MESSAGE":
      return {
        ...state,
        invalidMessage: { ...state.invalidMessage, category: action.payload },
      };
    case "SET_DIFFICULTY_INVALID_MESSAGE":
      return {
        ...state,
        invalidMessage: { ...state.invalidMessage, difficulty: action.payload },
      };
    case "CHANGE_PAGE":
      return { ...state, page: action.payload };
    case "SET_CORRECT_ANSWERS":
      return { ...state, correctAnswers: action.payload };
    default:
      return state;
  }
}

type OptionsProviderProps = {
  children: ReactNode;
};
export function OptionsProvider({ children }: OptionsProviderProps) {
  const [optionsState, optionsDispatch] = useReducer(
    optionsReducer,
    initialOptions
  );
  return (
    <OptionsContext.Provider value={{ optionsState, optionsDispatch }}>
      {children}
    </OptionsContext.Provider>
  );
}
