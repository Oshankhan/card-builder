import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
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
      <div className="box1">
        <label className="creategroup">Create Group*</label>
        <br />
        <input
          type="text"
          onChange={handleGroupChange}
          name="groupName"
          value={initialValues.group.groupName}
          className="inputFeild1"
          required
        />
        <br />
        <label className="decriptionheading">Add description </label>
        <br />
        <textarea
          type="text"
          onChange={handleGroupChange}
          name="groupDetails"
          value={initialValues.group.groupDetails}
          placeholder="Describe the roles, responsibility,skills required for the job and help candidate understand the role better"
          className="description"
        />
      </div>

      <br />

      <div className="box1">
        {initialValues.terms.map((term, index) => (
          <div className="term-parent" key={index}>
            <div className="term-parent1">
              <label className="term1">{index + 1}. Enter Term* </label>
              <br />
              <input
                type="text"
                onChange={(e) => handleTermsChange(e, index)}
                name="title"
                value={term.title}
                className="inputFeild1"
                required
              />
            </div>
            <div className="term-parent2">
              <label className="term1">Enter Definition*</label>
              <br />
              <input
                type="text"
                onChange={(e) => handleTermsChange(e, index)}
                name="des"
                value={term.des}
                className="inputFeild1"
                required
              />
            </div>
            <div className="term-parent2">
              {initialValues.terms.length > 1 && (
                <button onClick={() => deleteTerm(index)}>
                  <MdDelete />
                </button>
              )}
            </div>
          </div>
        ))}
        <br />
        <br />
        <button className="add-more" onClick={addNewTerm}>
          + Add more{" "}
        </button>
      </div>

      <br />

      <button onClick={handleSubmit} className="createbutton">
        Create
      </button>
    </div>
  );
};

export default CreateNew;
