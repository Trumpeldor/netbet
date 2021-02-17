import React from "react";
import { connect } from 'react-redux';
import { execute } from '../../net/Query';
import Actions from '../../store/actions/lotteries';
import Utils from '../../utils/Utils';
import './index.css';

function Form({ lotteries, clear, sort }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    execute();
  };
  const empty = !Utils.isLongerArray(lotteries, 0);
  return (
    <form onSubmit={handleSubmit}>
      <button title='Clear' disabled={empty} type='button' onClick={clear}>Clear</button>
      <button title='Sort by jackpot' disabled={empty} type='button' onClick={() => sort('jackpot', false)}>Sort by jackpot</button>
      <button title='Sort by closing time' disabled={empty} type='button' onClick={() => sort('closing', true)}>Sort by closing time</button>
      <input title='Submit' disabled={!empty} type='submit' value='Submit' />
    </form>
  );
}

export default connect(
  state => ({
    lotteries: state.lotteries
  }),
  dispatch => ({
    clear: () => dispatch(Actions.clear()),
    sort: (prop, ascending) => dispatch(Actions.sort(prop, ascending))
  })
)(Form)
