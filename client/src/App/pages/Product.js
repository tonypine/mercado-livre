import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// GLOBAL
import { Container, Row, Col } from 'react-grid-system';

// COMPONENTS
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContentBox from '../components/common/ContentBox';
import ProductDetail from './Product/ProductDetail';
// import Product from './ProductList/ProductListItem';

import { fetchItem } from '../store/items/actions';

import style from './Product.module.scss';

const Product = ({ match }) => {
  const { id } = match.params;

  // REDUX
  const product = useSelector(state => state.items.selectedItem);
  const categories = useSelector(state => state.items.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem(id));
  }, [dispatch, id]);

  if (!product) return null;
  console.log('PRODUCT', product);
  return (
    <Container>
      <Row justify="center">
        <Col md={12}>
          {product && <Breadcrumbs items={categories} />}
          <ContentBox className={style.contentWrapper}>
            {product && <ProductDetail {...product} />}
          </ContentBox>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
