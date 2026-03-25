import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    audienceSize: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      organization: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      audienceSize: "",
      budget: "",
      message: "",
    });
  };

  return (
    <div className="form-page">


      <section className="form-section">
        <div className="form-wrapper">
          <div className="form-header">
            <p className="section-label">Book Ida</p>
            <h1 className="form-title">Speaking Inquiry Form</h1>
            <p className="form-subtitle">
              Please fill out the details below and someone will follow up with
              you regarding Ida Byrd Hill’s availability.
            </p>
          </div>

          {submitted && (
            <div className="form-success">
              Thank you. Your inquiry has been submitted.
            </div>
          )}

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Keynote">Keynote</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Panel">Panel</option>
                  <option value="Podcast">Podcast / Interview</option>
                  <option value="Corporate Training">Corporate Training</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label>Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Audience Size</label>
                <input
                  type="text"
                  name="audienceSize"
                  value={formData.audienceSize}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Budget Range</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field full-width">
              <label>Tell us more about your event</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share event details, goals, timing, and anything else helpful."
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}