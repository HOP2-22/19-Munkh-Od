import React from "react";
import UpperBack from "../Assets/UpperBack.png";
import LowerBack from "../Assets/LowerBack.png";
import MolePic from "../Assets/rat.png";
import { Box } from "@mui/material";

export const Mole = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "212px",
          overflow: "hidden",
        }}
      >
        <img
          src={UpperBack}
          alt="UB"
          style={{
            zIndex: "-1",
            width: "100px",
          }}
        />
        <img
          src={MolePic}
          alt="Mole"
          style={{
            position: "absolute",
            bottom: "-18px",
            zIndex: "1",
            left: "18px",
            transition: "bottom 200ms",
          }}
          onClick={{}}
        />
        <img
          src={LowerBack}
          alt="LB"
          style={{
            zIndex: "2",
            width: "100px",
            position: "absolute",
            bottom: "0px",
          }}
        />
      </div>
    </Box>
  );
};

export default Mole;
