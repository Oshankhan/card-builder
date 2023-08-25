import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCard,
  currentButtonVal,
  newGroupButtonClick,
} from "../../../setUp/redux/action";
import "./CreateNew.css";

const CreateNew = () => {
  const [initialValues, setInitialValues] = useState({
    group: {
      groupName: "",
      groupDetails: "",
      groupImage: "",
    },
    terms: [
      {
        title: "",
        des: "",
      },
    ],
  });

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addCard(initialValues));
    dispatch(currentButtonVal("My FlashCard"));
    dispatch(newGroupButtonClick(false));
  };

  const handleGroupChange = (event) => {
    const { name, value } = event.target;

    setInitialValues((prevValues) => ({
      ...prevValues,
      group: {
        ...prevValues.group,
        [name]: value,
      },
    }));
  };

  const handleTermsChange = (event, index) => {
    const { name, value } = event.target;

    setInitialValues((prevValues) => {
      const newTerms = [...prevValues.terms];
      newTerms[index][name] = value;

      return {
        ...prevValues,
        terms: newTerms,
      };
    });
  };

  const addNewTerm = () => {
    setInitialValues((prevValues) => ({
      ...prevValues,
      terms: [
        ...prevValues.terms,
        {
          title: "",
          des: "",
        },
      ],
    }));
  };

  const deleteTerm = (index) => {
    if (initialValues.terms.length > 1) {
      setInitialValues((prevValues) => {
        const newTerms = [...prevValues.terms];
        newTerms.splice(index, 1);

        return {
          ...prevValues,
          terms: newTerms,
        };
      });
    }
  };

  return (
    <div>
      <div>
        <label className="creategroup">Create Group</label>
        <input
          type="text"
          onChange={handleGroupChange}
          name="groupName"
          value={initialValues.group.groupName}
          className="inputFeild1"
        />

        <label className="decriptionheading">Add description</label>
        <input
          type="text"
          onChange={handleGroupChange}
          name="groupDetails"
          value={initialValues.group.groupDetails}
          className="description"
        />

        {initialValues.terms.map((term, index) => (
          <div key={index}>
            <label>Enter Term {index + 1}</label>
            <input
              type="text"
              onChange={(e) => handleTermsChange(e, index)}
              name="title"
              value={term.title}
              className="inputFeild1"
            />

            <label>Enter Definition {index + 1}</label>
            <input
              type="text"
              onChange={(e) => handleTermsChange(e, index)}
              name="des"
              value={term.des}
              className="inputFeild1"
            />

            {initialValues.terms.length > 1 && (
              <button onClick={() => deleteTerm(index)}>Delete</button>
            )}
          </div>
        ))}

        <button onClick={addNewTerm}>Add More Terms</button>

        <button onClick={handleSubmit} className="createbutton">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateNew;
