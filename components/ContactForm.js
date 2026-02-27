
import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "48e2a5c2-c697-4845-90f2-f0b824e28209");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
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
          <form onSubmit={onSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="trm-input"
              required
              maxLength={100}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="trm-input"
              required
              maxLength={150}
              autoComplete="email"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              className="trm-input"
              required
              maxLength={2000}
            />
            {result && (
              <div
                className={`trm-mb-20 ${result === "Success!" ? "trm-accent-color" : ""}`}
                style={result === "Error" ? { color: "#e74c3c" } : {}}
              >
                {result}
              </div>
            )}
            <div className="trm-form-bottom">
              <button
                type="submit"
                className="trm-btn"
              >
                Submit <i className="fas fa-arrow-right" />
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
}
