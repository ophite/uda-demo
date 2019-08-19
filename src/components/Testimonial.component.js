import React from 'react';
import styled from 'styled-components';
import person1 from './../assets/img/testimonial/person-1.jpg'
import person2 from './../assets/img/testimonial/person-1.jpg'
import person3 from './../assets/img/testimonial/person-1.jpg'

const TestimonialWrapper = styled.div`
    padding: 80px 0;
    
    min-height:  600px;
    color: #000;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    
    .testimonial {
      background: #fff;
      border-radius: 8px;
      padding: 0 24px 24px ;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  
      @media (min-width: 768px) {
        width: 30%;
      }
      
      &__person {
        border-radius: 50%;
        overflow: hidden;
        width: 80px;
        height: 80px;
        top: -40px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }    
      &__person-img {
        max-width: 100%;
        
      }
      &__text {
      
      }
      &__headline {
      
      }
      &__description {
      
      }
    }

`;

export default () => {
  return (
    <TestimonialWrapper>
      <div className='testimonial'>
        <div className='testimonial__person'>
          <img className='testimonial__person-img' src={ person1 }/>
        </div>
        <p className='testimonial__text'>
          “We grew our sales 30% from social!
          I use PromoRepublic a portion of the time to schedule and design posts. Sometimes we just pull a great quote from their Post Ideas section that I know will speak to our base. Often, though, it’s to do a straight-up product promotion.”
        </p>
        <h3 className='testimonial__headline'>
          Stacy Woodward
        </h3>
        <p className='testimonial__description'>
          Owner of Wild & Roaming
        </p>
      </div>

      <div className='testimonial'>
        <div className='testimonial__person'>
          <img className='testimonial__person-img' src={ person2 }/>
        </div>
        <p className='testimonial__text'>
          “We grew our sales 30% from social!
          I use PromoRepublic a portion of the time to schedule and design posts. Sometimes we just pull a great quote from their Post Ideas section that I know will speak to our base. Often, though, it’s to do a straight-up product promotion.”
        </p>
        <h3 className='testimonial__headline'>
          Stacy Woodward
        </h3>
        <p className='testimonial__description'>
          Owner of Wild & Roaming
        </p>
      </div>
      <div className='testimonial'>
        <div className='testimonial__person'>
          <img className='testimonial__person-img' src={ person3 }/>
        </div>
        <p className='testimonial__text'>
          “We grew our sales 30% from social!
          I use PromoRepublic a portion of the time to schedule and design posts. Sometimes we just pull a great quote from their Post Ideas section that I know will speak to our base. Often, though, it’s to do a straight-up product promotion.”
        </p>
        <h3 className='testimonial__headline'>
          Stacy Woodward
        </h3>
        <p className='testimonial__description'>
          Owner of Wild & Roaming
        </p>
      </div>
    </TestimonialWrapper>
  );
};
