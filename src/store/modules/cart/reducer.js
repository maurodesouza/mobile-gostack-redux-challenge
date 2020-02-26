const cart = (state = [], action) => {
  switch (action.type) {
    case '@cart/ADD':
      return [...state, action.product];
    default:
      return state;
  }
};

export default cart;
