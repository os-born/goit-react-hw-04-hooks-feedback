import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(btnName => (
    <button
      className={s.feedback__button}
      type="button"
      key={btnName}
      onClick={() => {
        onLeaveFeedback(btnName);
      }}
    >
      {btnName}
    </button>
  ));
};

FeedbackOptions.protoTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
