import React from 'react';

// GLOBAL COMPONENTS
import { Picture } from 'react-responsive-picture';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

// LOCAL COMPONENTS
import Search from './Search';
import Logo from './Logo_ML.png';
import Logo2x from './Logo_ML@2x.png';

import style from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Row justify="center">
          <Col md={12} className={style.col}>
            <Link to="/" className={style.logoAnchor}>
              <Picture
                className={style.logo}
                src={`${Logo} 1x, ${Logo2x} 2x`}
                alt="Mercado Libre"
              />
            </Link>
            <Search className={style.search} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppHeader;
