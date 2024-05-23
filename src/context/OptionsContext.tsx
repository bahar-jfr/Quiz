import { ReactNode, createContext, useContext, useReducer } from "react";

type OptionsState = {
  amount:number;
  category: string;
  difficulty:string;
  data:object[];
  valid:boolean;
  invalidMessage:string;
  page:number;
  correctAnswers:number
}

type OptionsAction =
  |{ type: "CHANGE_CATEGORY"; payload: string }
  | { type: "CHANGE_DIFFICULTY"; payload: string }
  | { type: "CHANGE_AMOUNT"; payload: number }
  | { type: "SET_DATA"; payload: object[] }
  | { type: "IS_VALID"; payload: boolean }
  | { type: "SET_INVALID_MESSAGE"; payload: string }
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
      valid: false,
      invalidMessage: "",
      page: 0,
      correctAnswers: 0,
    },
    optionsDispatch: () => {},
  });
  

const initialOptions = {
  amount: 0,
  category: "",
  difficulty: "",
  data: [],
  valid: false,
  invalidMessage: "",
  page: 0,
correctAnswers: 0
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
    case "IS_VALID":
      return { ...state, valid: action.payload };
    case "SET_INVALID_MESSAGE":
      return { ...state, invalidMessage: action.payload };
    case "CHANGE_PAGE":
      return { ...state, page: action.payload };
      case "SET_CORRECT_ANSWERS":
        return{...state,correctAnswers:action.payload}
    default:
      return state;
  }
}

type ThemeProviderProps = {
  children: ReactNode;
};
export function OptionsProvider({ children }: ThemeProviderProps) {
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
