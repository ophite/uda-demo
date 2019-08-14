import React from 'react';
import Helmet from 'components/Helmet.component';
import Image1 from './../assets/img/about-us/art3.png';
import Image2 from './../assets/img/about-us/art4.png';
import Image3 from './../assets/img/about-us/app-img.png';

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

    <div id="about">
      <section className="section-gap section-gray-bg">
        <div className="container">
          {/*section title*/}
          <div className="row text-center">
            <div className="col-12">
              <div className="section-title">
                <h1 className>ICO Pre Sale Going On</h1>
                <p className=" "> to find the ones who get it right. We trust our future with experts everyday</p>
                <p className=" "> to find the ones who get it right. We trust our future with experts everyday</p>
                <p className=" "> to find the ones who get it right. We trust our future with experts everyday</p>
                <p className=" "> to find the ones who get it right. We trust our future with experts everyday</p>
              </div>
            </div>
          </div>{/*section title*/}
          {/*currency icons*/}
        </div>
      </section>
    </div>
    {/*section start*/}
    <section className="section-gap section-gray-bg">
      <div className="container">
        <div className="row d-flex align-items-center mb-lg-5 mb-md-3 pb-lg-5 pb-0">
          <div className="col-md-7 col-gap">
            <h6 className=" pre-title ls2">NO MIDDLEMAN-</h6>
            <h2 className="mb-md-5 text-purple-color ">Truly Decentralized Exchange</h2>
            <p className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga incidunt iste
              laudantium rem voluptatem. Ad animi deserunt dolorem est, excepturi illo, ipsa iste porro
              quasi, sit tempora vitae voluptate. consectetur adipisicing elit. Cupiditate fuga incidunt iste
              laudantium rem voluptatem. Ad animi deserunt dolorem est.</p>
            <a href="javascript:;" className="btn btn-purple btn-pill text-uppercase ">get notified</a>
          </div>
          <div className="col-md-5 col-gap ">
            <img className="my-5" src={Image1} alt="" />
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-gap ">
            <h6 className="  pre-title ls2">INFINITE CHAINS NUMBER-</h6>
            <h2 className="text-paste-color mb-md-5 ">Scalable Infrastructure for the Token Economy</h2>
            <p className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga incidunt iste
              laudantium rem voluptatem. Ad animi deserunt dolorem est, excepturi illo, ipsa iste porro
              quasi, sit tempora vitae voluptate. consectetur adipisicing elit. Cupiditate fuga incidunt iste
              laudantium rem voluptatem. Ad animi deserunt dolorem est.</p>
          </div>
          <div className="col-md-5 col-gap mb-md-0 mb-3 order-md-first">
            <div className>
              <img src={Image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-gap feature-gradient pb-0">
      <div className="container">
        {/*section title*/}
        <div className="row text-center justify-content-md-center">
          <div className="col-md-6 col-12">
            <div className="section-title">
              <h3 className=" mb-lg-3">Wallet App</h3>
              <p className> Dr. Stephen Dormatshon advises companies on all aspects of intellectual property law, including licensing with a focus of technology and media. </p>
            </div>
          </div>
        </div>{/*section title*/}
        <div className="row">
          <div className="col-md-6 col-gap ">
            <p>Dormatshon advises companies on all aspects of intellectual property law, including licensing with a focus of technology and media. </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-ellipsis-horizontal pr-2" />Easy access to the KrypLab wallet</li>
              <li><i className="bi bi-ellipsis-horizontal pr-2" />No extra fees</li>
              <li><i className="bi bi-ellipsis-horizontal pr-2" />Effective news circulation</li>
              <li><i className="bi bi-ellipsis-horizontal pr-2" />Easy deposit and withdrawl money</li>
              <li><i className="bi bi-ellipsis-horizontal pr-2" />Secure trading and transaction</li>
            </ul>
          </div>
          <div className="col-md-6 col-gap ">
            <img src={Image3} alt="" />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
