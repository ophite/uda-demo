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

    <div id="contact">
      {/*section start*/}
      <section className="section-gap telegram-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">

            </div>
          </div>
        </div>
      </section>
      {/*section end*/}
      {/*contact start*/}
      <section className="section-gap-sm feature-gradient">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="contact-box" className="card text-dark py-md-3 px-md-4 ">
                <div className="card-body">
                  <div className="row justify-content-md-center text-center">
                    <div className="col-md-8 col-12">
                      <div className="py-3">
                        <h1 className="mb-0">Contact us</h1>
                        <p>This following currenciess right now.</p>
                      </div>
                      <form role="form" id="contactForm" className="contact-form text-left" data-toggle="validator">
                        <div className="row">
                          <div className=" col-md-6">
                            <div className="form-group ">
                              <input type="text" id="name" className="form-control" placeholder="Name" required data-error="Please enter your name" />
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className=" col-md-6">
                            <div className="form-group ">
                              <input type="email" className="email form-control" id="email" placeholder="Email" required data-error="Please enter your email" />
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <input type="text" id="msg_subject" className="form-control" placeholder="Subject" required data-error="Please enter your message subject" />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <textarea id="message" rows={4} placeholder="Massage" className="form-control" required data-error="Write your message" defaultValue={""} />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="text-center mt-md-5">
                          <button type="submit" id="submit" className="btn btn-purple btn-pill text-uppercase">Submit</button>
                          <div id="msgSubmit" className="h5 text-center hidden" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/*contact end*/}
    </div>
  </React.Fragment>
);
