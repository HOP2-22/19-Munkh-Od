import React, { useContext } from "react";
import { ColorModeContext } from "./ThemeContext";

function Home() {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return <div>Home theme: {theme}</div>;
}

export default Home;
