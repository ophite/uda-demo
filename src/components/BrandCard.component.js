import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const FreeInstagramLikesWrapper = styled.section`

    color: #000;
    * {
    box-sizing: border-box;
    }
    
    .brand-card {
      margin-bottom: 30px;
      background: #fff;      
      padding: 20px;
      position: relative;
      box-shadow: 0 0 50px 0 rgba(0, 0, 0, .05);
      border-radius: 10px;
      
      @media (min-width: 768px) {
       height: 200px;
       display: flex;
        padding: 0px;

      }
      &__col {
        padding: 15px;
        @media (min-width: 768px) {
          width: 33%;

        }
        &--cta {
          @media (min-width: 768px) {
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
                    
          }
        }
        &--logo {
        padding: 25px;
         

          @media (min-width: 768px) {
            width: 200px;
            height: 200px;
            background: #ccc;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }
        }
      }
      &__logo {
        max-width: 200px;
        @media (min-width: 768px) {
          max-width: 100%;
        }
      }
      &__position {
        position: absolute;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        left: -10px;
        top: 20px;
        background: #7e62fd;
        color: #fff;
        height: 40px;
        width: 40px;
        font-weight: bold;
        box-shadow: 0 0 50px 0 rgba(0, 0, 0, .07);

        &::before {
        content: '#';
        }
      }
      &__descriotion {
        font-size: 12px;
      }
    }
`;


const BrandCardComponent = (props) => {

  return (
    <FreeInstagramLikesWrapper>
      <div className="brand-card">
        <div className="brand-card__position">
          {props.position}
        </div>
        <div className="brand-card__col brand-card__col--logo">

          <div className="brand-card___logo-wrapper">
            <img className='brand-card__logo' src={props.logoImage} alt={props.brandName + 'logo'}/>
          </div>
        </div>
        <div className="brand-card__col">
          <h3 className='brand-card__name'>
            {props.brandName}
          </h3>
          <p className='brand-card__descriotion'>
            {props.description}
          </p>
          <a className='brand-card__link' href={props.brandLinkHref}>
            {props.brandLink}
          </a>

        </div>
        <div className="brand-card__col">
          <div>
            Overall Rating: 10/{props.rate}
          </div>
          <div>
            Quantity: {props.quantity}
          </div>
          <div>
            Frequency: {props.frequency}
          </div>
          <div>
            Time delivery: {props.timeDelivery}
          </div>
          <div>
            EmailNeeded: {props.emailNeeded}
          </div>
        </div>
        <div className='brand-card__col brand-card__col--cta'>
          <a href={props.brandLink} className="btn btn-purple btn-pill text-uppercase ">{props.cta}</a>
        </div>
        </div>
    </FreeInstagramLikesWrapper>
  );
};

BrandCardComponent.defaultProps = {
  position: 'twitter account',
  logoImage: 'logo',
  brandName: 'BrandName',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ',
  brandLink: 'BrandLink',
  rate: '5',
  pageTo: '#',
  brandLinkHref: 'Href',
  pageToText: '#',
  quantity: 'quantity',
  frequency: 'frequency',
  timeDelivery: 'timeDelivery',
  emailNeeded: 'emailNeeded',
  cta: 'Get free likes',

};

BrandCardComponent.propTypes = {
  position: PropTypes.string,
  logoImage: PropTypes.string,
  brandName: PropTypes.string,
  description: PropTypes.string,
  brandLink: PropTypes.string,
  rate: PropTypes.string,
  pageTo: PropTypes.string,
  brandLinkHref: PropTypes.string,
  pageToText: PropTypes.string,
  quantity: PropTypes.string,
  frequency: PropTypes.string,
  timeDelivery: PropTypes.string,
  emailNeeded: PropTypes.string,
  cta: PropTypes.string,
};

export default BrandCardComponent;
