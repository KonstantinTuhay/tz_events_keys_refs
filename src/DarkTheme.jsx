import React from "react";
import Registr from "./Registr";

const DarkTheme = ({ theme, setTheme }) => {
  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div
      style={{ color: theme === "light" ? "black" : "white" }}
      className="wrapper"
      id={theme}
    >
      <div className="toggle-container">
        <p>{theme} mode</p>
        <input onChange={switchTheme} type="checkbox" />
      </div>
      <Registr />
    </div>
  );
};

export default DarkTheme;
