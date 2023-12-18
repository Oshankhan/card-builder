import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { termsIndex } from "../../../setUp/redux/action";
import "./LeftComponent.css"

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
    <div className="leftcomp">
            <p id="flash">Flashcards</p>
            <hr />
            <ListGroup>
              {terms &&
                terms.map((value, i) => {
                  return (
                    <button id="list" key={i} onClick={() => handleClick(i)}>
                      {value.title}
                    </button>
                  );
                })}
            </ListGroup>
    </div>
  );
}

export default LeftComponent;
