import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import { Link } from 'components/Router';


import styled from 'styled-components';

import Logo from './../logo.png';

const Footer = styled.section`
    background: #ccc;
    padding: 100px 0;
    .footer {
      color: #000
      &__copyright {
        text-align: center;
      }
      &__headline {
      
      }
    }

`;

export default () => {
  return (
    <Footer>
      <div className="footer">

        <Container>
          <Row>
            <Col>
              <img src={ Logo } alt="Logo"/>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h3 className='footer__headline'>
                    footer nav headline
                  </h3>
                  <Link to='/' className='link'>test link</Link>

                </Col>
                <Col>
                  <h3>
                    nav headline
                  </h3>
                  <Link to='/' className='link'>test link</Link>

                </Col>
              </Row>
            </Col>
            <Col/>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <p className='footer__copyright'>
               smm-listing.com Copyright © 2006
              </p>
            </Col>

          </Row>
        </Container>
      </div>
    </Footer>
  );
};
