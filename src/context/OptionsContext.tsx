import { ReactNode, createContext, useContext, useReducer } from "react";

const OptionsContext = createContext();

const initialOptions = {
  amount: 0,
  category: "",
  difficulty: "",
  data: [],
  valid: false,
  invalidMessage: "",
  page: 0,
};

export const useOptionsContext = () => useContext(OptionsContext);

export function optionsReducer(state, action) {
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
