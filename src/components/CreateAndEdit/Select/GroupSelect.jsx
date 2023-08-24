import React, { useState } from "react";
import SelectGroupEdit from "../Edit/SelectGroupEdit.jsx";
import { itemList } from "../../../data.js";
import { useSelector } from "react-redux";

const GroupSelect = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [indexItem, setIndexItem] = useState(-1);

  const item = useSelector((state) => state.cards);
  console.log(item);
  const handleGroupSelect = (event) => {
    const selectedGroupValue = event.target.value;
    setSelectedGroup(selectedGroupValue);
    if (selectedGroupValue === "") {
      setIndexItem(-1);
    } else {
      setIndexItem(event.target.selectedIndex - 1);
    }
  };

  return (
    <div>
      <label>Select Group:</label>
      <select onChange={handleGroupSelect} value={selectedGroup}>
        <option>Create New Group</option>
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
