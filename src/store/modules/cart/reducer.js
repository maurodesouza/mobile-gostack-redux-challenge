import produce from 'immer';

const cart = (state = [], action) => {
  switch (action.type) {
    case '@cart/ADD':
      return [...state, action.product];
    case '@cart/REMOVE':
      return produce(state, draft => {
        const index = draft.findIndex(({ id }) => id === action.id);

        if (index >= 0) {
          draft.splice(index, 1);
        }
      });
    default:
      return state;
  }
};

export default cart;
