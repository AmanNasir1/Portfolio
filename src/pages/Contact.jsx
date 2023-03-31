import React from "react";
import {
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>
          Get in <span> Touch </span>
        </h1>
      </div>
      <div className="contact-content">
        <div className="contact-address">
          <h3>Don't be shy</h3>
          <p className="contact-address-para">
            Feel free to get in touch with me. I am always open  to
            discussing new projects, creative ideas or opportunities to
            be part of your visions.
          </p>
          <div className="contact-address-info">
            <PhoneFilled
              style={{
                backgroundColor: "#FFB912",
                padding: "0.6rem",
                borderRadius: "50%",
                fontSize: "20px",
              }}
            />
            <div>
              <span>Call Me</span>
              <p>+923212163426</p>
            </div>
          </div>
          <div className="contact-address-info">
            <MailFilled
              style={{
                backgroundColor: "#FFB912",
                padding: "0.6rem",
                borderRadius: "50%",
                fontSize: "20px",
              }}
            />
            <div>
              <span>Mail Me</span>
              <p>aman.nasir231@gmail.com</p>
            </div>
          </div>
          <div className="social-media">
            <FacebookFilled className="social-media-icon" />
            <TwitterCircleFilled className="social-media-icon" />
            <LinkedinFilled className="social-media-icon" />
            <GithubFilled className="social-media-icon" />
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-detail-input-row">
            <div>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <input type="text" placeholder="Your Email" />
            </div>
          </div>
          <div className="contact-detail-input-row-2">
            <input type="text" placeholder=" Your Subject "/>
          </div>
          <div className="contact-detail-input-row-3">
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          </div>
          <div className="btn">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
