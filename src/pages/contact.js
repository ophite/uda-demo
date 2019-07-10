import React from 'react';
import Helmet from 'components/Helmet.component';

export default () => (
  <React.Fragment>
    <Helmet
      title='Contact page title'
      metaDescription='Contact page description'
      linkCanonical='contact.html'

      facebookTitle='Contact Home Social Media Management Tools Listing'
      facebookDescription='Contact Home Social Media Management Tools Listing - List Your Service there'
      facebookSiteName='Contact Home Social Media Management Tools Listing'
      facebookImagePath='Contact Home image path'

      twitterCard='Contact Home summary'
      twitterDescription='Contact Home Social Media Management Tools Listing - List Your Service there'
      twitterTitle='Contact Home Social Media Management Tools Listing'
      twitterImage='Contact Home image path'
    />
    <p>Contact us.</p>
  </React.Fragment>
);
