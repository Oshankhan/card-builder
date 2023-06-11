const intialValues = {
  buttonVal: "Create New",
  indexValue: 0,
};

export const reducer = (state = intialValues, action) => {
  switch (action.type) {
    case "CURRENT_BTN_VAL":
      return {
        ...state,
        buttonVal: action.payload,
      };

    case "CURRENT_INDX_VALUE":
      return {
        ...state,
        indexValue: action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  itemList: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      // const payload = action.payload;
      // console.log(payload);
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };

    default:
      return state;
  }
};
