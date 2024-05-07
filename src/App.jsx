import React, { useState } from "react";
import MyContext from "./MyContext";
import Registr from "./Registr";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <MyContext.Provider value={theme}>
        <div className="wrapper" id={theme}>
          <label>
            <p>{theme} mode</p>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />
            Use {theme === "light" ? "dark" : "light"} mode
          </label>
          <Registr />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
