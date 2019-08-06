import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';

// GLOBAL
import { Container, Row, Col } from 'react-grid-system';

// COMPONENTS
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContentBox from '../components/common/ContentBox';
import ProductListItem from './ProductList/ProductListItem';

import { getItems } from '../store/items/selectors';
import { fetchItems } from '../store/items/actions';

const categories = [
  { name: 'Eletrônica, Audio e Vídeo' },
  { name: 'iPod' },
  { name: 'Reprodutores' },
  { name: 'iPod Touch' },
  { name: '32 GB' }
];
const ProductList = ({ location }) => {
  const { search } = qs.parse(location.search, { ignoreQueryPrefix: true });

  // REDUX
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(search));
  }, [dispatch, search]);

  return (
    <Container>
      <Row justify="center">
        <Col md={12}>
          <Breadcrumbs items={categories} />
          <ContentBox>
            {items.map(item => (
              <ProductListItem key={item.id} {...item} />
            ))}
          </ContentBox>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
