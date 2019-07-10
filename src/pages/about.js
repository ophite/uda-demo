import React from 'react';
import Helmet from 'components/Helmet.component';

export default () => (
  <React.Fragment>
    <Helmet
      title='About page title'
      metaDescription='About page description'
      linkCanonical='about.html'

      facebookTitle='about Social Media Management Tools Listing'
      facebookDescription='about Social Media Management Tools Listing - List Your Service there'
      facebookSiteName='about Social Media Management Tools Listing'
      facebookImagePath='about image path'

      twitterCard='about summary'
      twitterDescription='about Social Media Management Tools Listing - List Your Service there'
      twitterTitle='about Social Media Management Tools Listing'
      twitterImage='about image path'
    />
    <p>About us.</p>
  </React.Fragment>
);
