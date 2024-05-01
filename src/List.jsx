import React, { Fragment } from "react";

const List = ({ add, setAdd }) => {
  // const handleEdit = () => {
  //   setAdd(()=>{})
  // };
  const handleDelete = (id) => {
    setAdd((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <ul>
        {add.map((item) => (
          <li id={crypto.randomUUID()}>
            {item.name} - {item.age}{" "}
            <button
              onClick={(prev) => {
                <input value={prev.name - prev.age} />;
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
