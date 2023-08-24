import React, { useState } from "react";
import { itemList } from "../../../data";

const SelectGoupEdit = ({ groupSelected }) => {
  const [setSelectedTerm, setsetSelectedTerm] = useState("");
  const [indexForDes, setIndexForDes] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleTermSelect = (event) => {
    const selectedGroupValue = event.target.value;
    setsetSelectedTerm(selectedGroupValue);
    setIndexForDes(event.target.selectedIndex);
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
            </>
          ) : (
            <>
              <br />
              <label>Defination</label>
              <input type="text" />
            </>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            disabled={isEditing ? true : false}
          >
            {!isEditing ? "Edit" : "Editing"}
          </button>
          <button
            disabled={!isEditing ? true : false}
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            save
          </button>
        </>
      ) : (
        <>Empty</>
      )}
    </div>
  );
};

export default SelectGoupEdit;
