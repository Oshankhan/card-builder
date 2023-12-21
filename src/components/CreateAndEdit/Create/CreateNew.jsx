import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  addCard,
  currentButtonVal,
  newGroupButtonClick,
} from "../../../setUp/redux/action";
import "./CreateNew.css";

const validationSchema = Yup.object().shape({
  group: Yup.object().shape({
    groupName: Yup.string().required("Group Name is required"),
    groupDetails: Yup.string(),
  }),
  terms: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Term Title is required"),
      des: Yup.string().required("Term Description is required"),
    })
  ),
});

const CreateNew = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      group: {
        groupName: "",
        groupDetails: "",
      },
      terms: [{ title: "", des: "" }],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addCard(values));
      dispatch(currentButtonVal("My FlashCard"));
      dispatch(newGroupButtonClick(false));
    },
  });

  const addNewTerm = () => {
    formik.setFieldValue("terms", [
      ...formik.values.terms,
      { title: "", des: "" },
    ]);
  };

  const deleteTerm = (index) => {
    if (formik.values.terms.length > 1) {
      const newTerms = [...formik.values.terms];
      newTerms.splice(index, 1);
      formik.setFieldValue("terms", newTerms);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="box1">
          <label className="creategroup">Create Group*</label>
          <br />
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="group.groupName"
            value={formik.values.group.groupName}
            className="inputFeild1"
            required
          />
          <br />
          <label className="decriptionheading">Add description </label>
          <br />
          <textarea
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="group.groupDetails"
            value={formik.values.group.groupDetails}
            placeholder="Describe the roles, responsibility, skills required for the job and help candidate understand the role better"
            className="description"
          />
        </div>

        <br />

        <div className="box1">
          {formik.values.terms.map((term, index) => (
            <div className="term-parent" key={index}>
              <div className="term-parent1">
                <label className="term1">{index + 1}. Enter Term* </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  name={`terms[${index}].title`}
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
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  name={`terms[${index}].des`}
                  value={term.des}
                  className="inputFeild1"
                  required
                />
              </div>
              <div className="term-parent2">
                {formik.values.terms.length > 1 && (
                  <button onClick={() => deleteTerm(index)}>
                    <MdDelete />
                  </button>
                )}
              </div>
            </div>
          ))}
          <br />
          <br />
          <button type="button" className="add-more" onClick={addNewTerm}>
            + Add more
          </button>
        </div>

        <br />

        <button type="submit" className="createbutton">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateNew;
