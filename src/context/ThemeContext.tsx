import {  Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

//Define the types 
type ThemeProviderProps={
    children:ReactNode
}

type ThemeState={
    mode:string
}

type ThemeAction={
    type:"CHANGE_THEME",
    payload:string
}

export type ThemeContextType={
    themeState:ThemeState;
    themeDispatch:Dispatch<ThemeAction>
}



const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useThemeContext = ()=> useContext(ThemeContext)

export function themeReducer(state:ThemeState, action:ThemeAction):ThemeState{
    switch(action.type){
        case "CHANGE_THEME":
            return{...state , mode:action.payload}
            default:
                return state
    }
}

const initialState : ThemeState={
    mode:"dark"
}

export function ThemeProvider({children}:ThemeProviderProps){
const [themeState,themeDispatch] = useReducer(themeReducer,initialState)

    return(
        <ThemeContext.Provider value={{themeState,themeDispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}