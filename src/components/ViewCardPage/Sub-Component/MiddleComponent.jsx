import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { termsIndex } from "../../../setUp/redux/action";
import "./MiddleComponent.css";

function LeftComponent() {
  const data = useSelector((state) => state.cards);
  const indexData = useSelector((state) => state.details);
  const cardIndexValue = indexData.indexValue;
  const termsIndexValues = indexData.termsValue;

  const terms = data.itemList[cardIndexValue].terms;

  const dispatch = useDispatch();

  const handleSelect = (selectedIndex) => {
    dispatch(termsIndex(selectedIndex));
  };

  return (
    <div className="middle">
      <Carousel
        activeIndex={termsIndexValues}
        onSelect={handleSelect}
        interval={null}
      >
        {terms.map((vlaues, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="slider">
                <img
                  className="d-block w-50"
                  src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
                  alt="First slide"
                />
                <br />
                <p>{vlaues.des}</p>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default LeftComponent;
