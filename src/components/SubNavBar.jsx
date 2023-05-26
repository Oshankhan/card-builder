import React, { useState } from "react";
import "./SubNavBar.css";
import CreateNewCard from "./CreateNewCard";
import MyFlashCard from "./MyFlashCard";

function SubNavBar() {
  const [active, setactive] = useState("btn1");
  console.log(active);
  console.log(active === "btn1" ? "" : "NavdivButton");
  return (
    <div className="subnavheading">
      <h3>Create Flashcard</h3>
      
      <div className="Navdiv">
        <button
          onClick={() => setactive("btn1")}
          className={active === "btn1" ? "NavdivButton" : ""}
        >
          Create New
        </button>
        <button
          onClick={() => setactive("btn2")}
          className={active === "btn2" ? "NavdivButton" : ""}
        >
          My FlashCard
        </button>
        <hr></hr>
      </div>
      <br />

      <div>{active === "btn1" ? <CreateNewCard /> : <MyFlashCard />}</div>
    </div>
  );
}

export default SubNavBar;
