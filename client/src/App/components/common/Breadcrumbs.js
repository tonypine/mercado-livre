import React from 'react';

import style from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ items }) => (
  <div className={style.wrapper}>
    {items.map(item => (
      <div key={item.id} className={style.item}>
        {item.name}
      </div>
    ))}
  </div>
);

export default Breadcrumbs;
