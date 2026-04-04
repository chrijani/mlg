"use client";

import { useState, type FormEvent } from "react";

const practiceAreas = [
  "Wills & Estate Planning",
  "Estate Administration",
  "Mortgage Enforcement",
  "Private Lending",
  "Real Estate Transactions",
  "Real Estate Development",
  "Corporate & Commercial",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form-success">
        <h3>Thank you for reaching out.</h3>
        <p>
          We have received your inquiry and will respond within one business day. If your
          matter is urgent, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="practiceArea">Practice Area</label>
        <select id="practiceArea" name="practiceArea" required defaultValue="">
          <option value="" disabled>Select a practice area</option>
          {practiceAreas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Briefly describe your situation and what you are looking to accomplish."
        />
      </div>

      <div className="form-group">
        <label htmlFor="referral">How did you hear about us?</label>
        <input type="text" id="referral" name="referral" />
      </div>

      <button type="submit" className="btn btn-filled form-submit">
        Send Inquiry
      </button>
    </form>
  );
}
