const clear = () => ({
  type: "CLEAR"
});

const refresh = (data) => ({
  type: "REFRESH",
  payload: data
});

const remove = (date) => ({
  type: "REMOVE",
  payload: date
});

const actions = {
  clear,
  refresh,
  remove
}

export default actions;
