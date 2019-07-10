import React from 'react';
import Helmet from 'components/Helmet.component';

export default () => (
  <React.Fragment>
    <Helmet
      title='404 page title'
      metaDescription='404 page description'
      linkCanonical='404.html'

      facebookTitle='404 Social Media Management Tools Listing'
      facebookDescription='404 Social Media Management Tools Listing - List Your Service there'
      facebookSiteName='404 Social Media Management Tools Listing'
      facebookImagePath='404 image path'

      twitterCard='404 summary'
      twitterDescription='404 Social Media Management Tools Listing - List Your Service there'
      twitterTitle='404 Social Media Management Tools Listing'
      twitterImage='404 image path'
    />
    <h1>{'404 - Oh no\'s! We couldn\'t find that page :('}</h1>
  </React.Fragment>
);
