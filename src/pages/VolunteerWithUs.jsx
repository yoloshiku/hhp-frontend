import React, { useState } from "react";
import ProgramsGrid from "../components/Programs";
import "./VolunteerWithUs.css";

export default function VolunteerWithUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    googleFormFilled: false,
    professionalSummary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleFormCheckbox = () => {
    setFormData((prev) => ({
      ...prev,
      googleFormFilled: !prev.googleFormFilled,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="vwu-pageWrapper">

      {/* HERO */}
      <section
        className="vwu-heroSection"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://humanhealthproject.org/wp-content/uploads/2025/11/luca-bravo-9l_326FISzk-unsplash-1200x800.jpg)",
        }}
      >
        <div className="vwu-heroOverlay">
          <div className="vwu-heroContainer">
            <h1 className="vwu-heroTitle">Volunteer with HHP</h1>
          </div>
        </div>
      </section>

      <div className="vwu-mainContainer">

        {/* HOW TO APPLY */}
        <section className="vwu-section">
          <h2 className="vwu-sectionTitle">How to Apply</h2>
          <ul className="vwu-stepsList">
            <li className="vwu-stepItem">Choose an area that interests you</li>
            <li className="vwu-stepItem">
              Write a short professional summary (200–300 words) about why you'd be a great fit
            </li>
            <li className="vwu-stepItem">
              Fill the Q&amp;A form for your application to be processed
            </li>
            <li className="vwu-stepItem">Attach your Resume</li>
          </ul>
        </section>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="vwu-form">

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Full Name <span className="vwu-required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="vwu-input"
              required
            />
          </div>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Email <span className="vwu-required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="vwu-input"
              required
            />
          </div>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Areas of Interest <span className="vwu-required">*</span>
            </label>
            <p className="vwu-placeholderText">to be added</p>
          </div>

          <p className="vwu-formLinkText">
            For your application to be processed, complete the Q&amp;A in this form{" "}
            <a
              href="https://forms.gle/6sefRinUT8wTw7H8A"
              className="vwu-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>link</b>
            </a>
          </p>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Application Confirmation <span className="vwu-required">*</span>
            </label>
            <label className="vwu-checkboxLabel">
              <input
                type="checkbox"
                checked={formData.googleFormFilled}
                onChange={handleGoogleFormCheckbox}
                className="vwu-checkbox"
              />
              I have filled out the Google Form mentioned above
            </label>
          </div>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Please provide a professional summary and how you are a good fit for HHP (200–300 words)
              <span className="vwu-required">*</span>
            </label>
            <textarea
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleInputChange}
              className="vwu-textarea"
              rows={6}
              required
            />
          </div>

          <button type="submit" className="vwu-submitButton">
            Submit
          </button>

        </form>

        <ProgramsGrid />

      </div>
    </div>
  );
}