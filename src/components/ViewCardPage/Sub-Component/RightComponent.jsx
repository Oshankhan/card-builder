import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Share from "./Share.jsx";
import "./RightComponent.css";

import { TfiBackRight } from "react-icons/tfi";
import { IoDownloadOutline } from "react-icons/io5";
import { HiOutlinePrinter } from "react-icons/hi";
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
    <div >
      <div className="buton">
        <button onClick={() => setModalShow(true)}>
          <div className="bu-style">
            <span><TfiBackRight /></span>
            <span><b>Share</b></span>
          </div>
        </button>
        <Share show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="buton">
        <button onClick={() => generatePDF()}>
          <div className="bu-style">
            <span><IoDownloadOutline /></span>
            <span><b>Download</b></span>
          </div>
        </button>
      </div>
      <div className="buton">
        <button >
          <div className="bu-style">
            <span><HiOutlinePrinter /></span>
            <span><b>Print</b></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default RightComponent;
