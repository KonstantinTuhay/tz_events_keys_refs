import React, { useState, useRef, useEffect } from "react";
import List from "./List";
import MyContext from "./MyContext";
import { useContext } from "react";

const Registr = () => {
  const value = useContext(MyContext);
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
    {
      id: crypto.randomUUID(),
      name: "Маша",
      age: 17,
      isMan: false,
      isEdit: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Саша",
      age: 38,
      isMan: true,
      isEdit: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Катя",
      age: 25,
      isMan: false,
      isEdit: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Ваня",
      age: 30,
      isMan: true,
      isEdit: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Максим",
      age: 40,
      isMan: true,
      isEdit: false,
    },
  ]);

  const addUser = () => {
    setAdd((prev) => [
      ...prev,
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
    <div>
      <div className="registrator">
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
        <p>We use {value} mode</p>
      </div>
    </div>
  );
};

export default Registr;
