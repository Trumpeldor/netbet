const initialState = [];

const reducer = (state = initialState, action) => {
  const copy = [...state];
  switch (action.type) {
    case 'CLEAR':
      return initialState;
    case 'REFRESH':
      return initialState.concat(action.payload);
    case 'REMOVE':
      copy.splice(copy.findIndex(o => o.date === action.payload), 1);
      return copy;
    case 'SORT':
      const { prop, ascending } = action.payload; 
      copy.sort((a, b) => ascending ? a[prop] > b[prop] : a[prop] < b[prop]);
      return copy;
    default:
      return state;
  }
};

export default reducer;
