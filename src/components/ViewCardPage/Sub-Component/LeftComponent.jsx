import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useDispatch, useSelector } from "react-redux";
import { termsIndex } from "../../../setUp/redux/action";

function LeftComponent() {
  const data = useSelector((state) => state.cards);
  const index = useSelector((state) => state.details);
  const indexValue = index.indexValue;

  const terms = data.itemList[indexValue].terms;
  const dispatch = useDispatch();
  const handleClick = (index) => {
    console.log(index);
    dispatch(termsIndex(index));
  };

  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row style={{ width: "18vw" }}>
          <Col sm={4}>
            <ListGroup>
              {terms &&
                terms.map((value, i) => {
                  return (
                    <button key={i} onClick={() => handleClick(i)}>
                      {value.title}
                    </button>
                  );
                })}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default LeftComponent;
