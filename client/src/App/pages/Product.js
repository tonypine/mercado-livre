import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// GLOBAL
import { Container, Row, Col } from 'react-grid-system';

// COMPONENTS
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContentBox from '../components/common/ContentBox';
import ProductDetail from './Product/ProductDetail';
// import Product from './ProductList/ProductListItem';

import { getItem } from '../store/items/selectors';
import { fetchItem } from '../store/items/actions';

import style from './Product.module.scss';

const categories = [
  { name: 'Eletrônica, Audio e Vídeo' },
  { name: 'iPod' },
  { name: 'Reprodutores' },
  { name: 'iPod Touch' },
  { name: '32 GB' }
];
const Product = ({ match }) => {
  const { id } = match.params;

  // REDUX
  const product = useSelector(state => getItem(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Row justify="center">
        <Col md={12}>
          <Breadcrumbs items={categories} />
          <ContentBox className={style.contentWrapper}>
            {product && <ProductDetail {...product} />}
          </ContentBox>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
