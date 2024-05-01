import React, { useState } from "react";

const List = ({ add, setAdd }) => {
  const [ed, setEd] = useState("");

  const handleEdit = (id, name, age) => {
    //???????????????????????????????????????
    setEd(`${name} - ${age}`);
    setAdd((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isEdit: true } : item))
    );
  };

  const handleDelete = (id) => {
    setAdd((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChange = (event) => {
    //?????????????????????????????????????????
    if (event.key === "Enter") {
      setAdd((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isEdit: true } : item))
      );
    }
  };
  console.log(add);
  return (
    <>
      <ul>
        {add.map((item) => (
          <li key={crypto.randomUUID()}>
            {item.isEdit === true ? (
              <input
                onKeyDown={handleChange}
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
