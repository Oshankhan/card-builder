const intialValues = {
  buttonVal: "",
  groupDetails: "",
};

export const reducer = (state = intialValues, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return {
        ...state,
        groupDetails: action.payload,
      };

    case "CURRENT_BTN_VAL":
      return {
        ...state,
        buttonVal: action.payload,
      };
    default:
      return state;
  }
};
