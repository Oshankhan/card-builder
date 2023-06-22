export const currentButtonVal = (value) => {
  return {
    type: "CURRENT_BTN_VAL",
    payload: value,
  };
};

export const btnIndexVal = (value) => {
  return {
    type: "CURRENT_INDX_VALUE",
    payload: value,
  };
};

export const addCard = (value) => {
  // console.log(value);
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
export const updateCard = (cardIndex, updatedData) => ({
  type: "UPDATE_CARD",
  payload: { cardIndex, updatedData },
});

export const upDateDetail = (index, groupDetail) => {
  return {
    type: "UPDATE_DETAILS",
    payload: {
      index,
      groupDetail,
    },
  };
};
