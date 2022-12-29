import React, { useContext } from "react";
import {
  Container as MUIContainer,
  AppBar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Lightswitch from "../components/Lightswitch";
import { DarkModeContext } from "../components/DarkModeContext";

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <AppBar
      sx={{ boxShadow: "none", background: darkMode ? "black" : "white" }}
    >
      <MUIContainer>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h4"
              color={darkMode ? "white" : "black"}
              sx={{ marginTop: "15px", fontWeight: "bold" }}
            >
              team.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ margin: "12px" }}>
              <Lightswitch />
            </Box>
            <Typography
              color="#6D7D8B"
              sx={{
                margin: "20px",
                fontWeight: "medium",
                textDecoration: "underline",
              }}
            >
              Products
            </Typography>
            <Typography
              color="#6D7D8B"
              sx={{
                margin: "20px",
                fontWeight: "medium",
                textDecoration: "underline",
              }}
            >
              Services
            </Typography>
            <Typography
              color="#6D7D8B"
              sx={{
                margin: "20px",
                fontWeight: "medium",
                textDecoration: "underline",
              }}
            >
              Contact
            </Typography>
            <Typography
              color="#6D7D8B"
              sx={{
                margin: "20px",
                fontWeight: "medium",
                textDecoration: "underline",
              }}
            >
              Log in
            </Typography>
            <Button
              variant="text"
              sx={{
                color: "#4DA0FD",
                borderRadius: "15px",
                fontWeight: "medium",
              }}
            >
              Get Access
            </Button>
          </Box>
        </Box>
      </MUIContainer>
    </AppBar>
  );
};
export default Header;
