import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MyFlashCard.css";
import { useDispatch, useSelector } from "react-redux";
import { btnIndexVal, currentButtonVal } from "../setUp/redux/action";

function SubContainer() {
  const dispatch = useDispatch();

  const [seeMore, setSeeMore] = useState(6);
  const data = useSelector((state) => state.cards);
  console.log(data.itemList.length);
  const seeMoreoption = () => {
    setSeeMore(data.itemList.length);
  };

  const showViewCardPage = (index) => {
    dispatch(currentButtonVal("ViewCardPage"));
    dispatch(btnIndexVal(index));
  };
  return (
    <>
      {data.itemList.length === 0 ? (
        <>Look Like you haven't made a group </>
      ) : (
        <>
          {Object.keys(data.itemList)
            .slice(0, seeMore)
            .map((values, index) => {
              return (
                <>
                  <div className="content" style={{ display: "flex" }}>
                    <Container>
                      <Row>
                        <Col md={4}>
                          <Card className="cardstyle">
                            <Card.Img className="Cardimg" src=" " />
                            <Card.Body className="cardbody">
                              <Card.Title className="cardtitle">
                                Gruop-Name
                              </Card.Title>
                              <Card.Text>Group-Details</Card.Text>
                              <Button
                                className="btn"
                                onClick={() => showViewCardPage(index)}
                              >
                                View Cards
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </>
              );
            })}
        </>
      )}
      <button onClick={seeMoreoption}>see more</button>
    </>
  );
}

export default SubContainer;
