import React from "react";
import {
  AiOutlineShareAlt,
  AiOutlineDownload,
  AiFillPrinter,
} from "react-icons/ai";

function RightComponent() {
  const obj = [
    {
      title: "Share",
      icon: AiOutlineShareAlt,
    },
    {
      title: "Download",
      icon: AiOutlineDownload,
    },
    {
      title: "Print",
      icon: AiFillPrinter,
    },
  ];

  return (
    <div>
      {obj.map((value, index) => {
        const IconComponent = value.icon;
        return (
          <div key={index + value.title}>
            <IconComponent />
            <p>{value.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RightComponent;
