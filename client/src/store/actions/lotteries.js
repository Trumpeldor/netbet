const clear = () => ({
  type: 'CLEAR'
});

const refresh = (data) => ({
  type: 'REFRESH',
  payload: data
});

const remove = (date) => ({
  type: 'REMOVE',
  payload: date
});

const sort = (prop, ascending) => ({
  type: 'SORT',
  payload: { prop, ascending }
});

const actions = {
  clear,
  refresh,
  remove,
  sort
}

export default actions;
