export const currentButtonVal = (value) => {
  return {
    type: "CURRENT_BTN_VAL",
    payload: value,
  };
};

export const newGroupButtonClick = (value) => {
  return { type: "NEW_GROUP_BUTTON", payload: value };
};

export const btnIndexVal = (value) => {
  return {
    type: "CURRENT_INDX_VALUE",
    payload: value,
  };
};

export const addCard = (value) => {
  const { group, terms } = value;
  return {
    type: "ADD_CARD",
    payload: {
      group,
      terms,
    },
  };
};

export const termsIndex = (value) => {
  return {
    type: "TERMS_INDEX",
    payload: value,
  };
};

export const upDateDetail = (index, groupDetail) => {
  return {
    type: "UPDATE_DETAILS",
    payload: {
      index,
      groupDetail,
    },
  };
};

export const updateDefination = (value, groupSelected, indexForDes) => {
  return {
    type: "UPDATE_DEF",
    payload: {
      groupIndex: groupSelected,
      termIndex: indexForDes,
      newDefination: value,
    },
  };
};
