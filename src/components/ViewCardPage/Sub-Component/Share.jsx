import "./Share.css"
import Modal from "react-bootstrap/Modal";
import {useState} from 'react'
import { BiCopyAlt } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';
import { EmailShareButton, EmailIcon } from 'react-share';

function Share(props) {

  const handleCopy= () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleOnChange= (event)=>{
    // setText(event.target.value)
    text(event.target.value)
  }
  const text= 'https://www.almabetter.com/abcde';
  // const [text, setText] = useState('https://www.almabetter.com/abcde');

  const [open, setOpen] = useState(true);

  return (
    <Modal
      {...props}s
      size="lg-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Share</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="butt">
          <strong> Link : </strong><textarea className="bu" onChange={handleOnChange} id="myBox" value={text} readOnly={true}> https://www.almabetter.com/abcde </textarea>
          <BiCopyAlt size={20} onClick={handleCopy} id="myBox" className="copyicon" />
          <AiOutlineShareAlt onClick={() => setOpen(!open)} size={25} className="copyicon" />
        </div>
      </Modal.Body>
      {!open && (
        <Modal.Body >
          <FacebookShareButton
            url={"https://www.almabetter.com/abcde"}
            quote={"This is all about Almabetter"}
            hashtag="#Almabetter"
          >
                  
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <LinkedinShareButton
            url={"https://www.almabetter.com/abcde"}
            title={"All about Almabetter"}
          >
                  
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={"https://www.almabetter.com/abcde"}
            title={"All about Almabetter"}
          >
                  
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TwitterShareButton
            url={"https://www.almabetter.com/abcde"}
            quote={"This is all about Almabetter"}
            hashtag="#Almabetter"
          >
                  
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton
            url={"https://www.almabetter.com/abcde"}
            subject={"All about Almabetter"}
            body={"dummy text!"}
          >
                  
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Modal.Body>
      )}
    </Modal>
  );
}

export default Share;
