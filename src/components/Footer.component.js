import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import { Link } from 'components/Router';


import styled from 'styled-components';

import Logo from './../logo.png';

const Footer = styled.div`
    background: #ccc;
    .footer {
      color: #000;
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

      <footer className="app-footer">
        <div className="primary-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <h4 className="text-uppercase">SmmListing</h4>
                <p>Subscribe to our newsletter to receive news, updates, free stuff and new releases by email. We don't do spam.</p>
                <p className="copyright">© Copyright 2019 SmmListing, Inc.™</p>
              </div>
              <div className="col-md-4 mb-md-0 mb-3 ">
                <h6 className="text-uppercase">Instagram</h6>
                <ul className="list-unstyled">
                  <li><a href="javascript:;">Free schedules</a></li>
                  <li><a href="javascript:;">terms &amp; privacy</a></li>
                  <li><a href="javascript:;">api reference</a></li>
                  <li><a href="javascript:;">help desk</a></li>
                </ul>
              </div>
              <div className="col-md-4 ">
                <h6 className="text-uppercase">About &amp; Contacts</h6>
                <ul className="list-unstyled">
                  <li><a href="javascript:;">Our Vision</a></li>
                  <li><a href="javascript:;">Features</a></li>
                  <li><a href="javascript:;">About Us</a></li>
                  <li><a href="javascript:;">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </Footer>
  );
};
