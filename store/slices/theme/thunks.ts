import { AppDispatch } from "../../store";
import { themeSwitch } from "./themeSlice";

export const startThemeSwitch = (currentState: string | boolean | null) => {
  return (dispatch: AppDispatch) => {
    if (currentState === null) {
      localStorage.setItem("isDark", JSON.stringify(true));
      dispatch(themeSwitch(true));
    } else if (currentState === "true") {
      localStorage.setItem("isDark", JSON.stringify(true));
      dispatch(themeSwitch(true));
    } else if (currentState === "false") {
      localStorage.setItem("isDark", JSON.stringify(false));
      dispatch(themeSwitch(false));
    } else if (currentState === true) {
      localStorage.setItem("isDark", JSON.stringify(!currentState));
      dispatch(themeSwitch(!currentState));
    } else if (currentState === false) {
      localStorage.setItem("isDark", JSON.stringify(!currentState));
      dispatch(themeSwitch(!currentState));
    }
  };
};
