export const currentButtonVal = (value) => {
  return {
    type: "CURRENT_BTN_VAL",
    payload: value,
  };
};

export const addCartItem = (value) => {
  return {
    type: "ADD_CART_ITEM",
    payload: value,
  };
};
