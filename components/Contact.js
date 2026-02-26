"use client";
import { Fragment, useState } from "react";
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.error || "Something went wrong." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Get in touch <span data-number={11} />
        </h5>
      </div>
      <div className="col-lg-12">
        <div className="trm-contact-card">
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={150}
              autoComplete="email"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={2000}
            />
            {status.text && (
              <div
                className={`trm-mb-20 ${
                  status.type === "success" ? "trm-accent-color" : ""
                }`}
                style={status.type === "error" ? { color: "#e74c3c" } : {}}
              >
                {status.text}
              </div>
            )}
            <div className="trm-form-bottom">
              <button
                type="submit"
                className="trm-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}{" "}
                {!loading && <i className="fas fa-arrow-right" />}
              </button>
              <div className="trm-text-sm">
                * I promise the confidentiality of your personal information
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
