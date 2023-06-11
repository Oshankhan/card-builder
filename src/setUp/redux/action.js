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
