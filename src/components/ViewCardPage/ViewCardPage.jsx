import { useDispatch, useSelector } from "react-redux";
import "./ViewCardPage.css";
import LeftComponent from "./Sub-Component/LeftComponent";
import MiddleComponent from "./Sub-Component/MiddleComponent";
import RightComponent from "./Sub-Component/RightComponent";
import { BiArrowBack } from "react-icons/bi";
import { currentButtonVal } from "../../setUp/redux/action";

function ViewCardPage() {
  const cards = useSelector((state) => state.cards);
  const index = useSelector((state) => state.details);
  // console.log(index);

  const detials = cards.itemList;
  const indexValue = index.indexValue;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(currentButtonVal("My FlashCard"));
  };
  return (
    <>
      <div className="components">
        <div onClick={handleClick}>
          <BiArrowBack />
        </div>

        <h3>{detials[indexValue].group.groupName} </h3>
      </div>
      <p>{detials[indexValue].group.groupDetails}</p>
      <br />

      <div className="components">
        <LeftComponent />
        <MiddleComponent />
        <RightComponent />
      </div>
    </>
  );
}

export default ViewCardPage;
