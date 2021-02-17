import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Utils from '../../utils/Utils';
import Actions from '../../store/actions/lotteries';
import './index.css';

function Lottery({ lottery: { logo, event, jackpot, currency, closing, id }, remove }) {
	const [timeLeft, setTimeLeft] = useState(closing - new Date().getTime());
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mock: call some API to play now in ' + event + '!');
  };
  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) {
        if (timeLeft > 1000) {
          setTimeLeft(timeLeft - 1000);
        } else {
          clearTimeout(timer);
          remove(id);
        }
      }
    }, 1000);
    return () => { isMounted = false };
  });
  const parts = Utils.parseDuration(timeLeft);
  const days = parts.days > 0 ? parts.days > 1 ? parts.days + ' Days ' : '1 Day ' : '';
  const withZero = (part) => {
    return part < 10 ? '0' + part : part;
  };
  const time = withZero(parts.hours) + ':' + withZero(parts.minutes) + ':' + withZero(parts.seconds);
  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={logo} alt={event} title={event} />
            </td>
          </tr>
          <tr>
            <td>
              <label>{currency}</label>
              <label className="jackpot">{jackpot} </label>
              <label>Million</label>
            </td>
          </tr>
          <tr>
            <td>
              <input className="play-now" title='Play Now' type='submit' value='PLAY NOW' />
            </td>
          </tr>
          <tr>
            <td>{days}{time}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}


export default connect(
  null,
  dispatch => ({
    remove: (date) => dispatch(Actions.remove(date))
  })
)(Lottery)
