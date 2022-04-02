// constants or action types
export const GET_CART = 'food-delivery-app/cart/GET_CART';
export const SUB_QUANTITY = 'food-delivery-app/cart/SUB_QUANTITY';
export const ADD_QUANTITY = 'food-delivery-app/cart/ADD_QUANTITY';
export const GET_TOTAL = 'food-delivery-app/total/GET_TOTAL';


// action creators. Create two actions to handle the types created above
// get countries action
export const fetCartsData = (data) => ({
  type: GET_CART,
  payload: data,
});

export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    payload: id,
  };
};
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    payload: id,
  };
};

export const getTotal = (payload) => ({
  type: GET_TOTAL,
  payload,
});

const initialState = {
  cart: {},
  order: []
}

// Create the reducers for each action
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CART:
      return [...state, action.payload];
    case ADD_QUANTITY:
      return [...state, action.payload];
    case SUB_QUANTITY:
      return [...state, action.payload];
    case GET_TOTAL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
