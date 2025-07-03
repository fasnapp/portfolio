import React from "react";
import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a19ddab5-03b4-41fc-9c47-f6054c674770");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  
  return (
    <section
      className="contact-section container-fluid text-white py-5"
      id="contact"
    >
      <div className="container">
        <h1 className="text-center mb-5">Get in touch</h1>
        <div className="row g-5">
          {/* Left info side */}
          <div className="col-md-6">
            <h3 className="mb-4 highlight-text">Let's talk</h3>
            <p className="lead mb-4 contact-intro">
              I'm currently available to take on new projects – feel free to send
              me a message anytime.
            </p>
            <div className="contact-details">
              <div className="d-flex align-items-center mb-3">
                <MdEmail className="icon me-3" />
                <span>fasna2003@gmail.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <MdPhone className="icon me-3" />
                <span>8590721379</span>
              </div>
              <div className="d-flex align-items-center">
                <MdLocationOn className="icon me-3" />
                <span>Kerala, India</span>
              </div>
            </div>
          </div>
          {/* Right form side */}
          <div className="col-md-6">
            <form onSubmit={onSubmit} className="d-flex flex-column gap-4">
              <div>
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control form-message"
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-light rounded-pill align-self-start btn-submit"
              >
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
