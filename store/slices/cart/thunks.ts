import { AppDispatch } from "../../store";
import { cartSwitch } from "./cartSlice";

export const startCartSwitch = () => {
  return (dispatch: AppDispatch) => {
    dispatch(cartSwitch())
  };
};
