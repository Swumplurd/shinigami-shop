import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { AppDispatch, startCartSwitch } from "../../store";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const SwitchCart = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleOpenCart = () => {
    dispatch(startCartSwitch())
  }

  return (
    <>
      <Button
        auto
        light
        icon={<ShoppingCartOutlinedIcon/>}
        onPress={handleOpenCart}
        color="error"
      />
    </>
  );
};
