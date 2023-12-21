import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Share from "./Share.jsx";

import {
  AiOutlineShareAlt,
  AiOutlineDownload,
  AiFillPrinter,
} from "react-icons/ai";
import jsPDF from "jspdf";

function RightComponent() {
  const generatePDF = () => {
    const report = new jsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#download-report")).then(() => {
      report.save("report.pdf");
    });
  };
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container">
      <div className="share">
        <Button variant="danger" onClick={() => setModalShow(true)}>
          <div style={{ display: "flex" }}>
            <AiOutlineShareAlt />
            <span>Share</span>
          </div>
        </Button>
        <Share show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="download">
        <Button variant="danger" onClick={() => generatePDF()}>
          <div style={{ display: "flex" }}>
            <AiOutlineDownload />
            <span>Download</span>
          </div>
        </Button>
      </div>
      <div className="print">
        <Button variant="danger" onClick={() => setModalShow(true)}>
          <div style={{ display: "flex" }}>
            <AiFillPrinter />
            <span>Print</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default RightComponent;
//test
