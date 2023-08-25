import React, { useState } from "react";
import { useSelector } from "react-redux";
import Editing from "./Editing";

const SelectGoupEdit = ({ groupSelected }) => {
  const itemList = useSelector((state) => state.cards.itemList);

  const [setSelectedTerm, setsetSelectedTerm] = useState("");
  const [indexForDes, setIndexForDes] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleTermSelect = (event) => {
    const selectedGroupValue = event.target.value;
    setsetSelectedTerm(selectedGroupValue);
    setIndexForDes(event.target.selectedIndex);
  };

  const handleSaving = (value) => {
    setIsEditing(value);
  };

  return (
    <div>
      {groupSelected !== -1 ? (
        <>
          <label>Terms</label>
          <select onChange={handleTermSelect} value={setSelectedTerm}>
            {itemList &&
              itemList[groupSelected].terms.map((item, index) => {
                return (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                );
              })}
          </select>
          <label>Defination</label>

          {!isEditing ? (
            <>
              <div>{itemList[groupSelected].terms[indexForDes].des}</div>
              <button
                onClick={() => {
                  setIsEditing(!isEditing);
                }}
                disabled={isEditing ? true : false}
              >
                Edit
              </button>
              <button disabled={true}>save</button>
            </>
          ) : (
            <Editing
              groupSelected={groupSelected}
              indexForDes={indexForDes}
              handleSaving={handleSaving}
            />
          )}
        </>
      ) : (
        <>Empty</>
      )}
    </div>
  );
};

export default SelectGoupEdit;
