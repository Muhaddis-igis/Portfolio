"use client";
import { Fragment } from "react";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <Fragment>
      <ContactInfo />
      <ContactForm />
    </Fragment>
  );
};
export default Contact;

const ContactInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Contact <span data-number={10} />
        </h5>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-service-icon-box trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="img/icons/icon-5.svg"
                alt="Phone icon"
                className="trm-black-icon"
              />
              <img
                src="img/icons/icon-5w.svg"
                alt="Phone icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Call</h6>
            <div>
              <span className="trm-label">Phone:</span>{" "}
              <span className="trm-text-sm">+92 316 8100200</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-service-icon-box trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="img/icons/icon-6.svg"
                alt="Email icon"
                className="trm-black-icon"
              />
              <img
                src="img/icons/icon-6w.svg"
                alt="Email icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Write</h6>
            <div>
              <span className="trm-label">Email:</span>{" "}
              <span className="trm-text-sm">muhaddisdev.ineer@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
