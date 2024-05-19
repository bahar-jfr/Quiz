import { ReactNode, createContext, useContext, useReducer } from "react";

const OptionsContext = createContext();

const initialOprions = {
    amount:0,
  category: "",
  difficulty: "",
};

export const useOptionsContext = () => useContext(OptionsContext);

export function optionsReducer(state, action) {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { ...state, category: action.payload };
    case "CHANGE_DIFFICULTY":
      return { ...state, difficulty: action.payload };
      case "CHANGE_AMOUNT":
        return{...state,amount:action.payload }
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
    initialOprions
  );
  return (
    <OptionsContext.Provider value={{ optionsState, optionsDispatch }}>
      {children}
    </OptionsContext.Provider>
  );
}
