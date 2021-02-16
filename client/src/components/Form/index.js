import React from "react";
import { connect } from 'react-redux';
import { execute } from '../../net/Query';
import Actions from '../../store/actions/ads';
import Utils from '../../utils/Utils';
import './index.css';

function Form({ ads, clear }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    execute();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button title='Clear' disabled={!Utils.isLongerArray(ads, 0)} type='button' onClick={clear}>Clear</button>
      <input title='Submit' type='submit' value='Submit' />
    </form>
  );
}

export default connect(
  state => ({
    ads: state.ads
  }),
  dispatch => ({
    clear: () => dispatch(Actions.clear())
  })
)(Form)
