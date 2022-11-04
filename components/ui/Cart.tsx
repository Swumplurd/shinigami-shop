import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { startCartSwitch } from "../../store/slices/cart/thunks";
import { Text, useTheme } from "@nextui-org/react";

export const Cart = () => {
  const dispatch: AppDispatch = useDispatch()
  const { theme } = useTheme();
  const { isOpen } = useSelector((state: RootState) => state.cart);

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => dispatch(startCartSwitch())}>
      <Box sx={{ width: 330 }} style={{backgroundColor: theme?.colors.gray50.value, flexGrow: 1}}>
        <Box sx={{ padding: "5px 10px" }}>
          <Text h4>Carrito</Text>
        </Box>
      </Box>
    </Drawer>
  );
};
