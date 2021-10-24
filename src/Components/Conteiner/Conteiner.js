import React from 'react';
import PropTypes from 'prop-types';
import s from './Conteiner.module.css';

const Conteiner = ({ children }) => {
  return <div className={s.conteiner}>{children}</div>;
};

Conteiner.propTypes = {
  message: PropTypes.node,
};

export default Conteiner;
