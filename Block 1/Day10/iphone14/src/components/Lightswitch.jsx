import React, { useContext } from "react";
import { DarkModeContext } from ".//DarkModeContext";
import { Switch } from "@mui/material";
function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <Switch
      checked={darkMode}
      onChange={() => handleClick()}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

export default Lightswitch;
