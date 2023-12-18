import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addterms, updateDefination } from "../../../setUp/redux/action";

const Editing = ({ groupSelected, indexForDes, handleSaving }) => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.cards.itemList);
  const [newTerms, setnewTerms] = useState([
    {
      title: "",
      des: "",
    },
  ]);

  const [editingValue, setEditingValue] = useState(
    itemList[groupSelected].terms[indexForDes].des
  );

  const handleDefinationEditing = (event) => {
    const value = event.target.value;

    setEditingValue(value);
  };
  const handleAdd = () => {
    const temp = [...newTerms, { title: "", des: "" }];
    console.log(temp);
  };
  const handleDelete = () => {};
  const handleChange = () => {};
  return (
    <div>
      {/* <label>Defination</label> */}
      <input
        type="text"
        value={editingValue}
        onChange={handleDefinationEditing}
      />
      <button onClick={handleAdd}>Add Trems </button>
      <button onClick={handleDelete}></button>
      <br />
      <button className="box4" disabled={true}>
        Edit
      </button>
      <button
        onClick={() => {
          handleSaving(false);
          dispatch(updateDefination(editingValue, groupSelected, indexForDes));
        }}
        className="box5"
      >
        save
      </button>
    </div>
  );
};

export default Editing;
