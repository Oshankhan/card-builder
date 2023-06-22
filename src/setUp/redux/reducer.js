const intialValues = {
  buttonVal: "Create New",
  indexValue: 0,
  termsValue: 0,
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
    case "TERMS_INDEX":
      return {
        ...state,
        termsValue: action.payload,
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
    // case "UPDATE_CARD": {
    //   const { cardIndex, updatedData } = action.payload;
    //   const updatedCards = [...state.itemList];
    //   updatedCards[cardIndex] = { ...updatedCards[cardIndex], ...updatedData };

    //   return { ...state, cards: updatedCards };
    // }
    case "UPDATE_DETAILS": {
      const { index, groupDetail } = action.payload;

      const updatedItemList = state.itemList.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            group: {
              ...item.group,
              groupDetails: groupDetail,
            },
          };
        }
        return item;
      });
      console.log(updatedItemList);
      return {
        ...state,
        itemList: updatedItemList,
      };
    }
    default:
      return state;
  }
};
