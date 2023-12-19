import React, { useState } from "react";
import SelectGroupEdit from "../Edit/SelectGroupEdit.jsx";
import { useDispatch, useSelector } from "react-redux";
import { newGroupButtonClick } from "../../../setUp/redux/action.js";
import "./GroupSelect.css"

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
    <>
      <div className="box2">
        <label id="selectgroup">Select Group:</label>
        <br />
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
        <br />
        <label id="description-add">Add description</label>
        <br />
        <textarea 
          type="text" 
          placeholder="Describe the roles, responsibility,skills required for the job and help candidate understand the role better" 
          className="description-edit"
          readOnly
        />

        <br />

      </div>
      <SelectGroupEdit groupSelected={indexItem} />
    </>
  );
};

export default GroupSelect;
