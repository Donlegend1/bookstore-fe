import React, { createContext, useEffect, useReducer, ReactNode, Dispatch } from "react";
import LoginReducer, { LoginAction } from "./loginReducer";

interface User {
  id: string;
  email: string;
  [key: string]: any;
}

interface ContextState {
  user: User | null;
  isFetching: boolean;
  error: boolean;
}

const INITIAL_STATE: ContextState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isFetching: false,
  error: false,
};

interface ContextProps extends ContextState {
  dispatch: Dispatch<LoginAction>;
}

export const Context = createContext<ContextProps>({
  ...INITIAL_STATE,
  dispatch: () => null,
});

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);
  console.log('====================================');
  console.log(state);
  console.log('====================================');

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user?.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
