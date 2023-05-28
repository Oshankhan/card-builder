const intialValues = {
  groupDetails: "",
};

export const reducer = (state = intialValues, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        groupDetails: action.payload,
      };

    default:
      state;
  }
};
