import React from 'react';
import PropTypes from 'prop-types';
import s from './notification.module.css';

const Notification = ({ message }) => {
  return <p className={s.stats__notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
