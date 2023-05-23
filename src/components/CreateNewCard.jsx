import React, { useState } from "react";
import "./CreateNewCard.css";
function CreateNewCard() {
  const [terms, setterms] = useState([
    {
      title: "",
      des: "",
    },
  ]);
  const handleAddItem = () => {
    const list = [...terms, { title: "", des: "" }];
    setterms(list);
  };
  const handleRemoveFields = (index) => {
    const values = [...terms];
    values.splice(index, 1);
    setterms(values);
  };
  const handleChange = (event, index) => {
    const value = [...terms];
    value[index][event.target.name] = event.target.value;
    setterms(value);
  };
  console.log(terms);
  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: " h-offset v-offset blur spread color",
        }}
      >
        <div style={{ display: "flex" }}>
          <label>Create Group</label>
          <input type="text" />
          <div style={{ border: "1px solid black" }}>
            <input type="file" id="file" className="custom-file-input" />
            <label htmlFor="file">Upload Image</label>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Add description</label>
          <input
            type="text"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </div>
        <br />
      </div>
      <div
        style={{
          marginTop: "30px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: " h-offset v-offset blur spread color",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {terms.map((value, index) => {
            return (
              <div style={{ display: "flex" }} key={index}>
                <p>{index + 1}</p>
                <label> Enter Term *</label>
                <input
                  type="text"
                  name="title"
                  onChange={(event) => handleChange(event, index)}
                />
                <label>Enter Term Defination</label>
                <input
                  type="text"
                  name="des"
                  onChange={(event) => handleChange(event, index)}
                />
                <button onClick={() => handleRemoveFields(index)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={handleAddItem}>Add item</button>
      </div>
      <button>Create</button>
    </>
  );
}

export default CreateNewCard;
