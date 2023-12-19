const intialValues = {
  buttonVal: "Create New",
  indexValue: 0,
  termsValue: 0,
  createNewButton: true,
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
    case "NEW_GROUP_BUTTON":
      return {
        ...state,
        createNewButton: action.payload,
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
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };
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
    case "UPDATE_DEF": {
      const { groupIndex, termIndex, newDefination } = action.payload;

      const updatedItemList = state.itemList.map((item, itemIndex) => {
        if (itemIndex === groupIndex) {
          const updatedTerms = item.terms.map((term, tIndex) => {
            if (tIndex === termIndex) {
              return {
                ...term,
                des: newDefination,
              };
            }
            return term;
          });

          return {
            ...item,
            terms: updatedTerms,
          };
        }
        return item;
      });

      return {
        ...state,
        itemList: updatedItemList,
      };
    }

    case "ADD_TERMS":
      const { addedtems, groupIndex } = action.payload;
      const updatedValue = state.itemList.map((value, index) => {
        if (index === groupIndex) {
          return {
            ...value,
            terms: [...value.terms, addedtems],
          };
        }
        console.log(updatedValue);
      });
      return state;

    default:
      return state;
  }
};
