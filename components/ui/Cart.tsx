import { useDispatch, useSelector } from "react-redux";
import { Button, Text, useTheme } from "@nextui-org/react";
import { Box, Drawer } from "@mui/material";
import { AppDispatch, RootState, startCartSwitch } from "../../store";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const { theme } = useTheme();
  const { isOpen } = useSelector((state: RootState) => state.cart);

  return (
    <Drawer anchor="right" open={isOpen}>
      <Box
        sx={{ width: 330 }}
        style={{ backgroundColor: theme?.colors.gray50.value, flexGrow: 1 }}
      >
        <Box sx={{ padding: "5px 10px" }}>
          <Button
            auto
            light
            icon={<CloseOutlinedIcon />}
            onPress={() => dispatch(startCartSwitch())}
            color="error"
          />
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Text h3>Carrito de Compras</Text>
        </Box>
      </Box>
    </Drawer>
  );
};
