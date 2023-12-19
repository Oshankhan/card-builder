import React from "react";

import "./MyFlashCard.css";

import SubContainer from "./SubContainer";

function MyFlashCard() {
  // const data = useSelector((state) => state.cards);
  // const groupName = data.itemList[0].group.groupName;
  // const groupDetails = data.itemList[0].group.groupDetails;

  // console.log(data);
  // console.log(data.itemList[0].group.groupName);

  return (
    <div className="cardgroup container">
      <SubContainer />
    </div>
  );
}

export default MyFlashCard;
