import React, { useState } from "react";
import SelectGroupEdit from "../Edit/SelectGroupEdit.jsx";
import { useDispatch, useSelector } from "react-redux";
import { newGroupButtonClick } from "../../../setUp/redux/action.js";

const GroupSelect = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [indexItem, setIndexItem] = useState(-1);
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.cards.itemList);

  const handleGroupSelect = (event) => {
    const selectedGroupValue = event.target.value;

    setSelectedGroup(selectedGroupValue);

    if (selectedGroupValue === "Create New Group") {
      dispatch(newGroupButtonClick(true));
      setIndexItem(-1);
    } else {
      setIndexItem(event.target.selectedIndex - 2);
    }
  };

  return (
    <div>
      <label>Select Group:</label>
      <select onChange={handleGroupSelect} value={selectedGroup}>
        <option value="">Select an option</option>
        <option value="Create New Group">Create New Group</option>
        {itemList &&
          itemList.map((item, index) => (
            <option key={index} value={item.group.groupName}>
              {item.group.groupName}
            </option>
          ))}
      </select>
      <label>Add description</label>
      <input type="text" placeholder="This is for the des" />

      <br />

      <SelectGroupEdit groupSelected={indexItem} />
    </div>
  );
};

export default GroupSelect;
