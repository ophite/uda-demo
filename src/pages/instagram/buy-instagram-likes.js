import React from 'react';
import Helmet from 'components/Helmet.component';
import Breadcrumbs from 'components/Breadcrumbs.component';
import FreeInstagrmaLikes from 'components/BrandCard.component';
import Headline from 'components/Headline.component';
import 'react-table/react-table.css';
import Container from 'react-bootstrap/Container';
import { BrandsData } from '../../data/freeInstagramViews.data';
import { MainSeoData } from '../../data/mainSeo.data';

const API = MainSeoData;

const BrandsDataList = () => {
  return (
    <div>
      {BrandsData.map(function (brand, index) {
        return <FreeInstagrmaLikes
          position={index + 1}
          logoImage={brand.Logo}
          brandName={brand.Name}
          brandLink={brand.Site}
          rate={brand.OverallRating}
          pageTo={brand.Site}
          pageToHref={brand.Site}
          pageToText={brand.Site}
          quantity={brand.Quantity}
          frequency={brand.Frequency}
          timeDelivery={brand.TimeDelivery}
          emailNeeded={brand.EmailNeeded}
        />;
      })}
    </div>
  );
};


export default () => (
  <React.Fragment>
    <Helmet
      title='Marketing-tools page title'
      metaDescription='Marketing-tools Contact page description'
      linkCanonical='test.html'

      facebookTitle='Marketing-tools Home Social Media Management Tools Listing'
      facebookDescription='Marketing-tools Home Social Media Management Tools Listing - List Your Service there'
      facebookSiteName='Marketing-tools Home Social Media Management Tools Listing'
      facebookImagePath='Marketing-tools Home image path'

      twitterCard='Marketing-tools Home summary'
      twitterDescription='Marketing-tools Home Social Media Management Tools Listing - List Your Service there'
      twitterTitle='Marketing-tools Home Social Media Management Tools Listing'
      twitterImage='Marketing-tools Home image path'
    />
    <Container>
      <Breadcrumbs/>
      <h1>
        Buy instagram Likes
      </h1>

      <BrandsDataList/>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate fuga pariatur possimus saepe similique temporibus ullam? Blanditiis eveniet id in quo tempore? At dignissimos minus omnis sunt vel voluptatem!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate fuga pariatur possimus saepe similique temporibus ullam? Blanditiis eveniet id in quo tempore? At dignissimos minus omnis sunt vel voluptatem!
      </p>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h2>
    </Container>
  </React.Fragment>
);
