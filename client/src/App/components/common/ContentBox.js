import React from 'react';
import style from './ContentBox.module.scss';

const ContentBox = ({ children, className }) => (
  <div className={`${style.wrapper} ${className}`}>{children}</div>
);

export default ContentBox;
