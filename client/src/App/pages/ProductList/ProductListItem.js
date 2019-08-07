import React from 'react';
import { Picture } from 'react-responsive-picture';
import { Link } from 'react-router-dom';
import Numeral from 'numeral';

import Shipping from './ic_shipping.png';
import Shipping2x from './ic_shipping@2x.png';

import style from './ProductListItem.module.scss';

const ProductListItem = props => {
  const { id, picture, title, price, free_shipping, seller_address } = props;
  console.log('SELLER_ADDRESS', seller_address);
  if (!seller_address) {
    debugger;
  }
  const { state } = seller_address;
  const formatedPrice = Numeral(price.amount).format('$ 0,00');
  return (
    <div className={style.wrapper}>
      <Picture className={style.picture} src={picture} />
      <div className={style.detailsWrapper}>
        <div className={style.detailsHead}>
          <div className={style.price}>
            <span>{formatedPrice}</span>
            {free_shipping && (
              <Picture
                className={style.freeShipping}
                src={`${Shipping} 1x, ${Shipping2x} 2x`}
              />
            )}
          </div>
          <div className={style.state}>{state}</div>
        </div>
        <Link to={`items/${id}`} className={style.title}>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ProductListItem;
