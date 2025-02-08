// Contact.jsx

import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className="title second-color">Contact</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-1" style={{ margin: "auto" }}>
            <form id="contact-form" method="post" action="">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstname">Prénom*</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    placeholder="Votre prénom"
                  />
                  <p className="comments"></p>
                </div>
                <div className="col-md-6">
                  <label htmlFor="name">Nom*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Votre nom"
                  />
                  <p className="comments"></p>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Votre email"
                  />
                  <p className="comments"></p>
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Votre téléphone"
                  />
                  <p className="comments"></p>
                </div>
                <div className="col-md-12">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Votre message"
                    rows="5"
                    style={{ height: "120px" }}
                  ></textarea>
                  <p className="comments"></p>
                </div>
                <div className="col-md-12">
                  <p>
                    <strong>* Ces informations sont requises</strong>
                  </p>
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    className="button1"
                    name="submit"
                    value="Envoyer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
