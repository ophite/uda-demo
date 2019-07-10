import React from 'react';
import Helmet from 'components/Helmet.component';

export default () => (
  <React.Fragment>
    <Helmet
      title='Marketing-tools page title'
      metaDescription='Marketing-tools Contact page description'
      linkCanonical='marketing-tools.html'

      facebookTitle='Marketing-tools Home Social Media Management Tools Listing'
      facebookDescription='Marketing-tools Home Social Media Management Tools Listing - List Your Service there'
      facebookSiteName='Marketing-tools Home Social Media Management Tools Listing'
      facebookImagePath='Marketing-tools Home image path'

      twitterCard='Marketing-tools Home summary'
      twitterDescription='Marketing-tools Home Social Media Management Tools Listing - List Your Service there'
      twitterTitle='Marketing-tools Home Social Media Management Tools Listing'
      twitterImage='Marketing-tools Home image path'
    />
    <p>Marketing tools.</p>
  </React.Fragment>
);
