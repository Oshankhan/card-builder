import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./MyFlashCard.css";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
// import { useSelector } from "react-redux";

import SubContainer from "./SubContainer";

function MyFlashCard() {
  const [open, setOpen] = useState(false);
  // const data = useSelector((state) => state.cards);
  // const groupName = data.itemList[0].group.groupName;
  // const groupDetails = data.itemList[0].group.groupDetails;

  // console.log(data);
  // console.log(data.itemList[0].group.groupName);

  return (
    <div className="cardgroup container">
      <SubContainer />

      <div>
        {!open && (
          <Button
            className="btn-view "
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            See all
          </Button>
        )}
      </div>
      <div>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text" className="container">
            <Row>
              <Col md={4}>
                <Card className="cardstyle">
                  <Card.Img className="Cardimg" src=" " />
                  <Card.Body className="cardbody">
                    <Card.Title className="cardtitle">Web 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the Web 3 and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button className="btn">View Cards</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="cardstyle">
                  <Card.Img className="Cardimg" src=" " />
                  <Card.Body className="cardbody">
                    <Card.Title className="cardtitle">Web 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the Web 3 and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button className="btn" variant="primary">
                      View Cards
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="cardstyle">
                  <Card.Img className="Cardimg" src=" " />
                  <Card.Body className="cardbody">
                    <Card.Title className="cardtitle">Web 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the Web 3 and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button className="btn" variant="primary">
                      View Cards
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Card className="cardstyle">
                  <Card.Img className="Cardimg" src=" " />
                  <Card.Body className="cardbody">
                    <Card.Title className="cardtitle">Web 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the Web 3 and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button className="btn">View Cards</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="cardstyle">
                  <Card.Img className="Cardimg" src=" " />
                  <Card.Body className="cardbody">
                    <Card.Title className="cardtitle">Web 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the Web 3 and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button className="btn" variant="primary">
                      View Cards
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="cardstyle">
                  <Card.Img className="Cardimg" src=" " />
                  <Card.Body className="cardbody">
                    <Card.Title className="cardtitle">Web 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the Web 3 and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button className="btn" variant="primary">
                      View Cards
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default MyFlashCard;
