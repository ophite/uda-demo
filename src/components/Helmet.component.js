/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const HelmetComponent = (props) => {
  if (!props) {
    debugger
  }
  return (
    <Helmet>
      {/* meta */}
      <meta charSet='utf-8' />
      <meta name='description' content={ props.metaDescription } />
      <meta name='robots' content='noodp' />
      <meta name='robots' content='index,follow' />

      {/* facebook */}
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={ props.facebookTitle } />
      <meta property='og:description' content={ props.facebookDescription } />
      <meta property='og:url' content={ props.facebookUrl } />
      <meta property='og:site_name' content={ props.facebookSiteName } />
      <meta property='og:image' content={ props.facebookImagePath } />

      {/* twitter */}
      <meta name='twitter:card' content={ props.twitterCard } />
      <meta name='twitter:site' content={ props.twitterSite } />
      <meta name='twitter:description' content={ props.twitterDescription } />
      <meta name='twitter:title' content={ props.twitterTitle } />
      <meta name='twitter:image' content={ props.twitterImage } />

      {/* other */}
      <title>{props.title}</title>
      <link rel='canonical' href={ `${props.facebookUrl}/${props.linkCanonical}` } />

      <script type='application/ld+json'>
        {`
        "@context":"http://schema.org/",
        "@type":"Product",
        "name":"Likigram Views",
        "brand":"Likigram",
        "sku":"1",
        "gtin8":"11111111",
        "review":{
          "@type":"Review",
          "reviewRating":{
            "@type":"Rating",
            "ratingValue":"5"
          },
          "author":{
            "@type":"Person",
            "name":"Sabrina"
          },
          "reviewBody":"It is very nice to see new people added to your followers list!"
        },
        "aggregateRating":{
          "@type":"AggregateRating",
          "ratingValue":4.85,
          "reviewCount":"8"
        },
        "offers":{
          "@type":"Offer",
          "priceCurrency":"USD",
          "price":"1.99",
          "priceValidUntil":"2020-11-05",
          "availability":"http://schema.org/InStock",
          "url":"https://likigram.com/buy-instagram-views",
          "seller":{
            "@type":"Organization",
            "name":"likigram"
          }
        },
        "description":"A slight boost to help you and your Instagram post perform better.",
        "image":""
      `}
      </script>
    </Helmet>
  );
};

HelmetComponent.defaultProps = {
  twitterSite: 'twitter account',
  facebookUrl: 'http://localhost:3000',
};

HelmetComponent.propTypes = {
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  linkCanonical: PropTypes.string.isRequired,

  facebookTitle: PropTypes.string.isRequired,
  facebookDescription: PropTypes.string.isRequired,
  facebookUrl: PropTypes.string,
  facebookSiteName: PropTypes.string.isRequired,
  facebookImagePath: PropTypes.string.isRequired,

  twitterCard: PropTypes.string.isRequired,
  twitterSite: PropTypes.string,
  twitterDescription: PropTypes.string.isRequired,
  twitterTitle: PropTypes.string.isRequired,
  twitterImage: PropTypes.string.isRequired,
};

export default HelmetComponent;
