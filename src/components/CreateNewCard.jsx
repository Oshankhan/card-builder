import React, { useState } from "react";
import "./CreateNewCard.css";
import { FcUpload } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { addCard, currentButtonVal } from "../setUp/redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreateNewCard() {
  const dispatch = useDispatch();
  const groupName = useSelector((state) => state.cards);
  console.log(groupName);
  const handleSubmit = (values) => {
    // console.log(values);
    dispatch(currentButtonVal("My FlashCard"));

    dispatch(addCard(values));
  };

  const validationSchema = Yup.object().shape({
    group: Yup.object().shape({
      groupName: Yup.string().required("Please fill the field"),
      groupDetails: Yup.string().required("Please fill the field"),
    }),
    terms: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Please fill the field"),
        des: Yup.string().required("Please fill the field"),
      })
    ),
  });
  const [isDropDownActive, setDropDownActive] = useState(false);
  const dropDownActive = () => {
    setDropDownActive(!isDropDownActive);
  };
  return (
    <Formik
      initialValues={{
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
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <div className="bothcontainer container">
            <div className="NewCardCointainer">
              <div
                style={{
                  display: "flex",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className="creategroup">Create Group*</label>
                  <div style={{ display: "flex" }}>
                    <Field
                      className="inputFeild"
                      type="text"
                      name="group.groupName"
                    />
                    {groupName !== "" && (
                      <>
                        <div
                          className={isDropDownActive ? "dropDownClass" : ""}
                        ></div>
                        <div className="dropDown">
                          <RiArrowDropDownLine onClick={dropDownActive} />
                        </div>
                      </>
                    )}
                    <div
                      style={{
                        border: "1px solid black",
                        marginLeft: "14px",
                        borderRadius: "5px",
                      }}
                    >
                      <Field
                        type="file"
                        id="file"
                        className="custom-file-input"
                        name="group.groupImage"
                      />
                      <label htmlFor="file">
                        <div className="uploadfile">
                          <FcUpload style={{ margin: "6px 2px 0px 4px" }} />
                          <p style={{ padding: "0px 5px" }}>Upload Image</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="group.groupName"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <br />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label className="decriptionheading">Add description</label>
                <Field
                  name="group.groupDetails"
                  type="text"
                  className="description"
                  placeholder="Describe the roles,responsibility,skills required for the job and help candidate understand the role better and doing  job well"
                />
                <ErrorMessage
                  name="group.groupDetails"
                  component="div"
                  className="error-message"
                />
              </div>
              <br />
            </div>

            {/* This is the second section of the code */}
            <div className="secondsection">
              <div
                className="NewCardCointainer"
                style={{
                  marginTop: "30px",
                  borderRadius: "10px",
                }}
              >
                <div
                  className={
                    (values.group.groupName && values.group.groupDetails) === ""
                      ? "blur"
                      : ""
                  }
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FieldArray name="terms">
                    {({ push, remove }) => (
                      <>
                        {values.terms.map((term, index) => (
                          <div className="indexno" key={index}>
                            <p>{index + 1}</p>
                            <label className="term"> Enter Term *</label>
                            <Field
                              type="text"
                              name={`terms[${index}].title`}
                              className="inputFeild1"
                            />
                            <ErrorMessage
                              name={`terms[${index}].title`}
                              component="div"
                              className="error-message"
                            />
                            <label className="termdefination">
                              Enter Definition*
                            </label>
                            <Field
                              type="text"
                              name={`terms[${index}].des`}
                              className="inputFeild1"
                            />
                            <ErrorMessage
                              name={`terms[${index}].des`}
                              component="div"
                              className="error-message"
                            />
                            <button
                              className="remove"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          className="addmore"
                          type="button"
                          onClick={() => push({ title: "", des: "" })}
                        >
                          + Add more
                        </button>
                      </>
                    )}
                  </FieldArray>
                </div>
              </div>
            </div>
            <button className="createbutton" type="submit">
              Create
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default CreateNewCard;
