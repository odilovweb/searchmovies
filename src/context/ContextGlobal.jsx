import { createContext, useEffect, useMemo, useReducer } from "react";

function getData() {
  return (
    JSON.parse(localStorage.getItem("state")) || {
      color: "rgb(148, 163, 184)",
      theme: "light",
      user: null,
    }
  );
}

export const ContextProvide = createContext();
const updateState = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_THEME":
      document.documentElement.setAttribute("data-theme", action.payload);
      return { ...state, theme: action.payload };
    case "CHANGE_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export function ContextGlobal({ children }) {
  const [state, dispatch] = useReducer(updateState, getData());
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };
  const changeUser = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };
  const newState = useMemo(() => {
    return state;
  });
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(newState));
    let theme = newState.theme;
    document.documentElement.setAttribute("data-theme", theme);
  });
  return (
    <ContextProvide.Provider
      value={{ state, changeColor, changeTheme, changeUser }}
    >
      {children}
    </ContextProvide.Provider>
  );
}
