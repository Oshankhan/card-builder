import React, { useState } from "react";
import "./SubNavBar.css";
import CreateNewCard from "./CreateNewCard";
import MyFlashCard from "./MyFlashCard";
import { useDispatch, useSelector } from "react-redux";
import { currentButtonVal } from "../setUp/redux/action";

function SubNavBar() {
  const [active, setactive] = useState("Create New");

  const dispatch = useDispatch();

  const value = useSelector((state) => state);
  // console.log(value.reducer.buttonVal);

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
                className={active === value ? "NavdivButton" : ""}
                onClick={() => setButton(value)}
              >
                {value}
              </button>
            );
          })}
        <hr className="bottomline"/>

      </div>

      <br />

      <div>
        {(() => {
          switch (value.reducer.buttonVal) {
            case "Create New":
              console.log(value.reducer.buttonVal);

              return <CreateNewCard />;

            case "My FlashCard":
              return <MyFlashCard />;
            default:
              return (
                <div>
                  <CreateNewCard />
                </div>
              );
          }
        })()}
      </div>

      {/* <div>
        {active === value.reducer.buttonVal ? (
          <CreateNewCard />
        ) : (
          <MyFlashCard />
        )}
      </div> */}
    </div>
  );
}

export default SubNavBar;
