import { createContext } from "react";
import { INITIAL_STATE } from "./ReducerAuth";

const ContextAuth = createContext(INITIAL_STATE)

export default ContextAuth
