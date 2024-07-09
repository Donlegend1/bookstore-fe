interface User {
  id: string;
  email: string;
  [key: string]: any;
}

interface State {
  user: User | null;
  isFetching: boolean;
  error: boolean;
}

export type LoginAction = 
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" };

const LoginReducer = (state: State, action: LoginAction): State => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, isFetching: true, error: false };
    case "LOGIN_SUCCESS":
      return { user: action.payload, isFetching: false, error: false };
    case "LOGIN_FAILURE":
      return { user: null, isFetching: false, error: true };
    case "LOGOUT":
      localStorage.removeItem("user");
      return { user: null, isFetching: false, error: false };
    default:
      return state;
  }
}

export default LoginReducer;
