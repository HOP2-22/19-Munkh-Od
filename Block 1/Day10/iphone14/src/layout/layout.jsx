import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          marginTop: "64px",
        }}
      >
        {children}
      </Box>
    </div>
  );
};
