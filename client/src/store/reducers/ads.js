const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR":
      return initialState;
    case "REFRESH":
      return initialState.concat(action.payload);
    default:
      return state;
  }
};

export default reducer;
