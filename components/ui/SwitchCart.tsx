import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { AppDispatch, startCartSwitch } from "../../store";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const SwitchCart = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <Button
        auto
        light
        icon={<ShoppingCartOutlinedIcon/>}
        onClick={() => dispatch(startCartSwitch())}
        color="error"
      />
    </>
  );
};
