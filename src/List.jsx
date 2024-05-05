import React, { useState } from "react";

const List = ({ add, setAdd }) => {
  const [ed, setEd] = useState("");

  const handleEdit = (id, name, age) => {
    console.log();
    setEd(name);
    setAdd((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isEdit: true } : item))
    );
  };

  const handleDelete = (id) => {
    setAdd((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChange = (event, id) => {
    if (event.key === "Enter") {
      setAdd((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, name: ed, isEdit: false } : item
        )
      );
    }
  };
  console.log(add);
  return (
    <>
      <ul>
        {add.map((item) => (
          <li key={item.id}>
            {item.isEdit === true ? (
              <input
                onKeyDown={(e) => handleChange(e, item.id)}
                value={ed}
                onChange={(e) => {
                  setEd(e.target.value);
                }}
              />
            ) : (
              <>
                {item.name} - {item.age}
              </>
            )}
            <button onClick={() => handleEdit(item.id, item.name, item.age)}>
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)} key={item.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
