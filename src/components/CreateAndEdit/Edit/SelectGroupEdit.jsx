import React, { useState } from "react";
import { useSelector } from "react-redux";
import Editing from "./Editing";
import "./SelectGroupEdit.css";

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
    <div className="box3">
      {groupSelected !== -1 ? (
        <>
          <label className="term">Terms</label>
          <br />
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
          <br />
          <br />
          <label className="term">Defination:</label>
          <br />

          {!isEditing ? (
            <>
              <span id="des">
                {itemList[groupSelected].terms[indexForDes].des}
              </span>
              <br />
              <div>
                <button
                  onClick={() => {
                    setIsEditing(!isEditing);
                  }}
                  disabled={isEditing ? true : false}
                  className="box4"
                >
                  Edit
                </button>
                <button disabled={true} className="box5">
                  save
                </button>
              </div>
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
