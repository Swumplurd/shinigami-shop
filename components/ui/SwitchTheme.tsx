import { useDispatch, useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import { AppDispatch, RootState, startThemeSwitch } from "../../store";
import {SunSVG, MoonSVG} from "../svg"

export const SwitchTheme = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.theme);
  return (
    <>
      {isDark ? (
        <Button
          auto
          light
          icon={<SunSVG fill="currentcolor" filled />}
          onPress={() => dispatch(startThemeSwitch(isDark))}
          color="error"
        />
      ) : (
        <Button
          auto
          light
          icon={<MoonSVG fill="currentcolor" filled />}
          onPress={() => dispatch(startThemeSwitch(isDark))}
          color="error"
        />
      )}
    </>
  );
};
