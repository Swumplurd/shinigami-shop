import { AppDispatch, RootState, startThemeSwitch } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const SwitchTheme = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.theme);
  return (
    <>
      {isDark ? (
        <Button
          auto
          light
          icon={<SunIcon fill="currentcolor" filled />}
          onClick={() => dispatch(startThemeSwitch(isDark))}
        />
      ) : (
        <Button
          auto
          light
          icon={<MoonIcon fill="currentcolor" filled />}
          onClick={() => dispatch(startThemeSwitch(isDark))}
        />
      )}
    </>
  );
};
