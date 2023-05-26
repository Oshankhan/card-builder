import React, { useState } from "react";
import "./CreateNewCard.css";
import { FcUpload } from "react-icons/fc";
function CreateNewCard() {
  const [group, setgroup] = useState({
    groupName: "",
    groupDetails: "",
    groupImage: "",
  });

  const handleGroupChange = (event) => {
    const { name, value } = event.target;
    setgroup((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

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
  console.log(group.groupName);
  return (
    <>
      <div
        style={{ height: "10px", width: "10px", backgroundColor: "black" }}
      ></div>
      <div className="NewCardCointainer">
        <div
          style={{ display: "flex", paddingTop: "20px", paddingLeft: "20px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="creategroup" >Create Group</label>
            <div style={{ display: "flex" }}>
              <input
                className="inputFeild "
                type="text"
                name="groupName"
                onChange={handleGroupChange}
                value={group.groupName}
              />
              <div
                style={{
                  border: "1px solid black",
                  marginLeft: "14px",
                  borderRadius: "5px",
                }}
              >
                <input
                  type="file"
                  id="file"
                  className="custom-file-input"
                  value={group.groupImage}
                  onChange={handleGroupChange}
                />
                <label htmlFor="file">
                  <div style={{ display: "flex" }}>
                    <FcUpload style={{ margin: "6px 2px 0px 4px" }} />
                    <p style={{ padding: "0px 5px" }}>Upload Image</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label className="decriptionheading">Add description</label>
          <input
            name="groupDetails"
            value={group.groupDetails}
            onChange={handleGroupChange}
            type="text"
            className="description"
            placeholder="Describe the roles,responsibility,skills required for the job and help candidate understand the role better and doing  job well"
          />
        </div>
        <br />
      </div>

      {/* This is the secons section of the code */}

      <div
        className="NewCardCointainer"
        style={{
          marginTop: "30px",
          borderRadius: "10px",
        }}
      >
        <div
          className={
            (group.groupName && group.groupDetails) === "" ? "blur" : ""
          }
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {terms.map((value, index) => {
            return (
              <div style={{ display: "flex" }} key={index}>
                <p>{index + 1}</p>
                <label> Enter Term *</label>
                <input
                  type="text"
                  name="title"
                  className="inputFeild"
                  onChange={(event) => handleChange(event, index)}
                />
                <label>Enter Term Defination</label>
                <input
                  type="text"
                  name="des"
                  className="inputFeild"
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
      <button className="createbutton">Create</button>
    </>
  );
}

export default CreateNewCard;
