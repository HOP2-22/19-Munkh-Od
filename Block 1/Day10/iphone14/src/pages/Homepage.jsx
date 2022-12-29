import React, { useContext } from "react";
import Cards from "../components/Cards";
import {
  Container as MUIContainer,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { DarkModeContext } from "../components/DarkModeContext";

const HomePage = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box
      sx={{
        backgroundColor: darkMode === true ? "black" : "white",
      }}
    >
      <MUIContainer>
        <Box>
          <Typography
            variant="h3"
            color={darkMode ? "white" : "black"}
            sx={{ fontWeight: "bold", paddingTop: "40px" }}
          >
            Blog posts
          </Typography>
          <Typography
            color="#6D7D8B"
            sx={{ fontWeight: "medium", marginTop: "20px" }}
          >
            Our latest uptades and blogs about managing your team
          </Typography>
        </Box>
        <Box sx={{ marginTop: "80px" }}>
          <Cards />
        </Box>
        <Box>
          <Button
            disableRipple
            sx={{
              boxShadow: "none",
              textTransform: "none",
              fontSize: 16,
              lineHeight: 1.5,
              borderRadius: "5px",
              marginTop: "40px",
              marginLeft: "475px",
              backgroundColor: "#B0BEC5",
              color: "#263238",
              padding: "12px 80px !important",
            }}
          >
            Next {`>`}
          </Button>
        </Box>
      </MUIContainer>
    </Box>
  );
};
export default HomePage;
