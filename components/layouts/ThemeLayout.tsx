import { AppDispatch, RootState, startThemeSwitch } from "../../store";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

export const ThemeLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(startThemeSwitch(localStorage.getItem("isDark")));
    }
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </NextUIProvider>
  );
};
