import React from 'react';
import { useTranslation } from 'react-i18next';
import Numeral from 'numeral';

// GLOBAL
import { Container, Row, Col } from 'react-grid-system';
import { Picture } from 'react-responsive-picture';

import style from './ProductDetail.module.scss';

const Product = ({
  picture,
  title,
  price,
  description,
  sold_quantity,
  condition
}) => {
  const { t } = useTranslation();
  const formatedPrice = Numeral(price.amount).format('$ 0,00');

  return (
    <Container className={style.wrapper} style={{ padding: 0 }}>
      <Row nogutter>
        <Col md={8} className={style.pictureWrapper}>
          <Picture className={style.picture} src={picture} />
        </Col>
        <Col md={4}>
          <div className={style.soldQuantity}>
            {t(condition)} - {sold_quantity} {t('sold')}
          </div>
          <h2 className={style.title}>{title}</h2>
          <p className={style.price}>
            <span>{formatedPrice}</span>
            <span className={style.priceDecimals}>{price.decimals}</span>
          </p>
          <button type="button" className={style.buyButton}>
            {t('buy')}
          </button>
        </Col>
      </Row>
      <div>
        <h3 className={style.descriptionTitle}>{t('product_description')}</h3>
        <p className={style.description}>{description}</p>
      </div>
    </Container>
  );
};

export default Product;
