const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initialState;
    case 'REFRESH':
      return initialState.concat(action.payload);
    case 'REMOVE':
      const copy = [...state];
      copy.splice(copy.findIndex(o => o.date === action.payload), 1);
      return copy;
    default:
      return state;
  }
};

export default reducer;
