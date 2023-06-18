import React, { useState } from "react";
import "./SubNavBar.css";
import CreateNewCard from "./CreateNewCard";
import MyFlashCard from "./MyFlashCard";
import { useDispatch, useSelector } from "react-redux";
import { currentButtonVal } from "../setUp/redux/action";
import ViewCardPage from "./ViewCardPage/ViewCardPage";
function SubNavBar() {
  const [active, setactive] = useState("Create New");

  const dispatch = useDispatch();

  const buttonVal = useSelector((state) => state.details.buttonVal);
  // console.log(buttonVal);

  const setButton = (value) => {
    setactive(value);
    dispatch(currentButtonVal(value));
  };
  const arr = ["Create New", "My FlashCard"];
  return (
    <div className="subnavheading">
      <h3>Create Flashcard</h3>
      <div className="Navdiv">
        {arr &&
          arr.map((value, index) => {
            return (
              <button
                key={index}
                className={buttonVal === value ? "Navdiv" : ""}
                onClick={() => setButton(value)}
              >
                {value}
              </button>
            );
          })}
        <hr className="bottomline" />
      </div>

      <br />

      <div>
        {(() => {
          switch (buttonVal) {
            case "Create New":
              return <CreateNewCard />;

            case "My FlashCard":
              return <MyFlashCard />;

            case "ViewCardPage":
              return <ViewCardPage />;
            default:
              return (
                <div>
                  <CreateNewCard />
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}

export default SubNavBar;
