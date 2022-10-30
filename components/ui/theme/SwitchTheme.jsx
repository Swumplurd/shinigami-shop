import React from "react";
import { MoonIcon } from "./MoonIcon";
import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { startThemeSwitch } from "../../../store/slices/theme/thunks";
import { SunIcon } from "./SunIcon";

export const SwitchTheme = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.theme);
  return (
    <>
      {isDark ? (
        <SunIcon filled onClick={() => dispatch(startThemeSwitch(isDark))}/>
      ) : (
        <MoonIcon filled onClick={() => dispatch(startThemeSwitch(isDark))}/>
      )}
    </>
  );
};
