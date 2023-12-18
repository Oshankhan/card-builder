import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Share from './Share.jsx'

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
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      {obj.map((value, index) => {
        const IconComponent = value.icon;
        return (
          <Button variant="danger" onClick={() => setModalShow(true)}>
            <div style={{display:"flex"}}  key={index + value.title}>
              <IconComponent />
              <p>{value.title}</p>
            </div>
          </Button>
        );
      })}
      <Share
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default RightComponent;
