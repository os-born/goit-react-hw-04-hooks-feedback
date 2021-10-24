import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statsList}>
      <li className={s.statsList__item}>Good: {good} </li>
      <li className={s.statsList__item}>Neutral: {neutral} </li>
      <li className={s.statsList__item}>Bad: {bad} </li>
      <li className={s.statsList__item}>Total: {total} </li>
      <li className={s.statsList__item}>
        Positive feedback: {positivePercentage}%{' '}
      </li>
    </ul>
  );
};

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
