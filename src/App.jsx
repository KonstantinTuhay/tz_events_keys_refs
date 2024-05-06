import React, { useState } from "react";
import MyContext from "./MyContext";
import DarkTheme from "./DarkTheme";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      {/* <MyContext.Provider> */}
      <DarkTheme theme={theme} setTheme={setTheme} />
      {/* </MyContext.Provider> */}
    </>
  );
}

export default App;
