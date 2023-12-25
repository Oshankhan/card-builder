import "./SubNavBar.css";
import MyFlashCard from "./MyFlashCard";
import { useDispatch, useSelector } from "react-redux";
import { currentButtonVal } from "../setUp/redux/action";
import ViewCardPage from "./ViewCardPage/ViewCardPage";
import CreateAndEdit from "./CreateAndEdit/CreateAndEdit";

// this is section to toggle Between Creating New Card and My Flash card
function SubNavBar() {
  const dispatch = useDispatch();

  const buttonVal = useSelector((state) => state.details.buttonVal);
  const setButton = (value) => {
    dispatch(currentButtonVal(value));
  };
  const arr = ["Create New", "My FlashCard"];
  return (
    <div className="subnavheading">
      <h3>Create Flashcard</h3>
      <div>
        {/* mapping an array */}
        {arr &&
          arr.map((value, index) => {
            return (
              <button
                key={index}
                className={buttonVal === value ? "Navdiv" : ""}
                onClick={() => setButton(value)}
              >
                {value}
              </button>
            );
          })}
        <hr className="bottomline" />
      </div>

      <br />

{/* switch Case */}
      <div>
        {(() => {
          switch (buttonVal) {
            case "Create New":
              return <CreateAndEdit />;

            case "My FlashCard":
              return <MyFlashCard />;

            case "ViewCardPage":
              return <ViewCardPage />;
            default:
              return (
                <div>
                  <CreateAndEdit />
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}

export default SubNavBar;
