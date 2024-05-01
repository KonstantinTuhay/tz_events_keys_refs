import React, { useState, useRef, useEffect } from "react";
import List from "./List";

function App() {
  const refFocus = useRef(null);

  useEffect(() => {
    refFocus.current.focus();
  }, []);

  // const handleClick = () => {
  //   refFocus.current.focus();
  // };

  const [nameText, setNameText] = useState("");
  const [ageText, setAgeText] = useState("");
  const [add, setAdd] = useState([
    { name: "Маша", age: 17, isMan: false },
    { name: "Саша", age: 38, isMan: true },
    { name: "Катя", age: 25, isMan: false },
    { name: "Ваня", age: 30, isMan: true },
    { name: "Максим", age: 40, isMan: true },
  ]);

  const addUser = () => {
    setAdd((prev) => [
      ...add,
      { id: crypto.randomUUID(), name: nameText, age: ageText },
    ]);
    setNameText("");
    setAgeText("");
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      addUser();
    }
  };

  return (
    <>
      <label>
        Введите имя
        <input
          placeholder="Введите имя"
          ref={refFocus}
          value={nameText}
          onChange={(e) => {
            setNameText(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Введите возраст
        <input
          placeholder="Введите возраст"
          onKeyDown={handleEnter}
          value={ageText}
          onChange={(e) => {
            setAgeText(e.target.value);
          }}
        />
      </label>

      {/* <button
        onClick={() => {
          handleClick();
        }}
      >
        focus
      </button> */}
      <br />
      <button onClick={addUser}>Add</button>

      <List add={add} setAdd={setAdd} />
    </>
  );
}

export default App;
