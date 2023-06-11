import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useSelector } from "react-redux";

function LeftComponent() {
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row style={{ width: "15vw" }}>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default LeftComponent;
