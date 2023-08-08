import { ReducerAuth, INITIAL_STATE } from "./ReducerAuth"
import { useReducer } from "react"
import ContextAuth from "./ContextAuth"

export default function ProviderAuth({children}){
    const [ state, dispatch ] = useReducer(ReducerAuth, INITIAL_STATE)

    return(
        <ContextAuth.Provider value={{state, dispatch}}>
            {children}
        </ContextAuth.Provider>
    )
}