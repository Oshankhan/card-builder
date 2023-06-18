import React from "react";
import Button from "react-bootstrap/Button";

import "./MyFlashCard.css";
import { useState } from "react";

// import { useSelector } from "react-redux";

import SubContainer from "./SubContainer";

function MyFlashCard() {
  const [open, setOpen] = useState(false);
  // const data = useSelector((state) => state.cards);
  // const groupName = data.itemList[0].group.groupName;
  // const groupDetails = data.itemList[0].group.groupDetails;

  // console.log(data);
  // console.log(data.itemList[0].group.groupName);

  return (
    <div className="cardgroup container">
      <SubContainer />

      <div>
        {!open && (
          <Button
            className="btn-view "
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            See all
          </Button>
        )}
      </div>
    </div>
  );
}

export default MyFlashCard;
