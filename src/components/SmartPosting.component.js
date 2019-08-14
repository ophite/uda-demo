import React from 'react';
import styled from 'styled-components';
import mainImage from './../assets/img/smart-posting/smart-posting.jpg';
import { Button, Container, Row, Col } from 'react-bootstrap';


const SmartPostingWrapper = styled.section`

    padding: 150px 0;
    color: #000;
    background: #fff;
    
    .smart-posting {
      &__headline {
      
      }
    }
`;

export default () => {
  return (
    <SmartPostingWrapper>
      <div className="smart-posting">
        <Container>
          <Row>
            <Col>
              <h2 className='smart-posting__headline'>
                Posting smart
              </h2>
              <p className="smart-posting__description">
                Manage content calendar to schedule posts to multiple pages and groups. Automate your posting with time slots. Get ready-to-go content from the Library of Post Ideas.

              </p>
              <p>
              </p>
              <Button variant="success">
                Learn More
              </Button>
            </Col>
            <Col>
              <img src={mainImage} alt=""/>

            </Col>
          </Row>
        </Container>
      </div>
    </SmartPostingWrapper>
  );
};
