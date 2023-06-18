import { useSelector } from "react-redux";
import LeftComponent from "./Sub-Component/LeftComponent";
import MiddleComponent from "./Sub-Component/MiddleComponent";
import RightComponent from "./Sub-Component/RightComponent";
import { BiArrowBack } from "react-icons/bi";

function ViewCardPage() {
  const cards = useSelector((state) => state.cards);
  const index = useSelector((state) => state.details);
  console.log(index);

  const detials = cards.itemList;
  const indexValue = index.indexValue;

  return (
    <>
      <div style={{ display: "flex" }}>
        <BiArrowBack />

        <h3>{detials[indexValue].group.groupName} </h3>
      </div>
      <p>{detials[indexValue].group.groupDetails}</p>

      <div style={{ display: "flex" }}>
        <LeftComponent />
        <MiddleComponent />
        <RightComponent />
      </div>
    </>
  );
}

export default ViewCardPage;
