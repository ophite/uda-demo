import React from 'react';
import styled from 'styled-components';
import Helmet from 'components/Helmet.component';


const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default () => (
  <React.Fragment>
    <Helmet
      title='Home page title'
      metaDescription='Home page description'
      linkCanonical='index.html'

      facebookTitle='Home Social Media Management Tools Listing'
      facebookDescription='Home Social Media Management Tools Listing - List Your Service there'
      facebookSiteName='Home Social Media Management Tools Listing'
      facebookImagePath='Home image path'

      twitterCard='Home summary'
      twitterDescription='Home Social Media Management Tools Listing - List Your Service there'
      twitterTitle='Home Social Media Management Tools Listing'
      twitterImage='Home image path'
    />
    <div style={ { textAlign: 'center' } }>
      <H1>Welcome to React-Static Styled Components</H1>
    </div>
  </React.Fragment>
);
