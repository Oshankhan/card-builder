import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDefination } from "../../../setUp/redux/action";

const Editing = ({ groupSelected, indexForDes, handleSaving }) => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.cards.itemList);

  const [editingValue, setEditingValue] = useState(
    itemList[groupSelected].terms[indexForDes].des
  );
  console.log(itemList[groupSelected].terms[indexForDes]);

  const handleDefinationEditing = (event) => {
    const value = event.target.value;

    setEditingValue(value);
  };

  return (
    <div>
      <label>Defination</label>
      <input
        type="text"
        value={editingValue}
        onChange={handleDefinationEditing}
      />
      <button disabled={true}>Edit</button>
      <button
        onClick={() => {
          handleSaving(false);
          dispatch(updateDefination(editingValue, groupSelected, indexForDes));
        }}
      >
        save
      </button>
    </div>
  );
};

export default Editing;
