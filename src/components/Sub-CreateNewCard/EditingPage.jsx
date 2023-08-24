import React, { useState } from "react";
import "./CreateNewCard.css";
import { FcUpload } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  addCard,
  btnIndexVal,
  currentButtonVal,
  upDateDetail,
} from "../setUp/redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

function EditingPage() {
  return <div>EditingPage</div>;
}

export default EditingPage;
