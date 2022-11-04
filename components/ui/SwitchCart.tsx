import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { AppDispatch } from "../../store";
import { startCartSwitch } from "../../store/slices/cart/thunks";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const SwitchCart = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <Button
        auto
        light
        icon={<ShoppingCartOutlinedIcon/>}
        onPress={() => dispatch(startCartSwitch())}
        color="error"
      />
    </>
  );
};
