import React from 'react';
import styled from 'styled-components';
import { Root } from 'react-static';
import { Container, Button, Form, } from 'react-bootstrap';

import Helmet from 'components/Helmet.component';
import Testimonial from 'components/Testimonial.component';
import FormModal from 'components/FormModal.component';
import SmartPosting from 'components/SmartPosting.component';

import bannerImage from './../assets/img/home-page/art2.png';
import cardImage1 from './../assets/img/b3.jpg';
import cardImage2 from './../assets/img/b4.jpg';


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
    <div>
      <div className="hero-banner creative-banner" id="home">
        <div className="bubble-set">
          <div className="bubble-lg"/>
          <div className="bubble-md"/>
          <div className="bubble-sm"/>
        </div>
        <div id="particles-js"/>
        <div className="hero-text ">
          <div className="container">
            <div className="row ">
              <div className="col-lg-7 col-md-12">
                <h1 className="hero-title  text-light">
                  Social Media Management platforms listing
                </h1>
                <p className="here-sub-title  text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dolorem dolorum enim error.
                </p>
                <div className="mb-3 mb-lg-3">
                  <a href="#" className="btn btn-gradient btn-pill text-uppercase mr-3 mb-3 ">Explore Listing</a>
                  <a href="javascript:;" className="btn btn-white btn-pill mb-3 text-uppercase ">Promote Your Account</a>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <img className="banner-img" src={bannerImage} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-footer"/>
      </div>


      <section className="section-gap section-dark-bg">
        <div className="container">
          {/*section title*/}
          <div className="row text-center">
            <div className="col-12">
              <div className="section-title">
                <h2 className=" ">Choose the solution that fits you best</h2>
              </div>
            </div>
          </div>
          {/*section title*/}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-gap">
              <div className="card mb-5 text-dark ">
                <img className="card-img-top" src={cardImage1} alt=""/>
                <div className="card-body p-lg-5">
                  <h5 className="card-title">
                    <a href="#" className="text-dark">For Social Media Users</a>
                  </h5>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-gap">
              <div className="card mb-5 text-dark ">
                <img className="card-img-top" src={cardImage2} alt=""/>
                <div className="card-body p-lg-5">
                  <h5 className="card-title">
                    <a href="#" className="text-dark">
                      For SMM Agencies and Tools
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-md-5 mt-3">
              <a href="#" className="btn btn-purple btn-pill text-uppercase ">explore all news</a>
            </div>
          </div>
        </div>
      </section>


      <SmartPosting/>
      <Container>
        <Testimonial/>
        <FormModal/>
      </Container>

    </div>
  </React.Fragment>
)
;
