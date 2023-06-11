import React from "react";
import { useSelector } from "react-redux";
import LeftComponent from "./Sub-Component/LeftComponent";
import MiddleComponent from "./Sub-Component/MiddleComponent";
import RightComponent from "./Sub-Component/RightComponent";

function ViewCardPage() {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div style={{ display: "flex" }}>
      <LeftComponent />
      <MiddleComponent />
      <RightComponent />
    </div>
  );
}

export default ViewCardPage;
