import { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, getRecipientEmail } from "../utils/emailConfig";

function QuotePanel({ email = "jgoff@pmfmortgage.com" }) {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    loanType: "",
    creditHistory: "",
    propertyValue: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.loanType ||
      !formData.creditHistory ||
      !formData.propertyValue
    ) {
      alert("Please fill in all required fields (*)");
      return;
    }

    setIsSubmitting(true);

    try {
      // Determine recipient email based on current page or provided email prop
      const recipientEmail = email || getRecipientEmail(location.pathname);

      // Prepare email data as JSON
      const emailData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        submittedFrom: location.pathname,
      };

      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: recipientEmail,
        from_name:
          `${formData.name} ${formData.lastName}`.trim() || "Anonymous",
        from_email: formData.email || "Not provided",
        subject: "New Quote Request from Website",
        message_json: JSON.stringify(emailData, null, 2),
        loan_type: formData.loanType,
        credit_history: formData.creditHistory,
        property_value: formData.propertyValue,
        page_url: window.location.href,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      );

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        lastName: "",
        email: "",
        loanType: "",
        creditHistory: "",
        propertyValue: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "There was an error sending your request. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-panel">
      <div className="eyebrow" style={{ color: "#7e8ab8" }}>
        Find Your Financing Options for Home Purchases &amp; Re-Financing
      </div>
      <h2>Get a Personalized Quote Today</h2>
      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="form-grid form-grid-2">
          <div className="field">
            <label htmlFor="q-name">Name</label>
            <input
              id="q-name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="q-last">Last Name</label>
            <input
              id="q-last"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-email">Email</label>
          <input
            id="q-email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-grid form-grid-2">
          <div className="field">
            <label htmlFor="q-loan">Type Of Loan *</label>
            <select
              id="q-loan"
              name="loanType"
              value={formData.loanType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select One
              </option>
              <option value="purchase">Purchase</option>
              <option value="refinance">Refinance</option>
              <option value="investment">Investment / DSCR</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="q-credit">Credit History *</label>
            <select
              id="q-credit"
              name="creditHistory"
              value={formData.creditHistory}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select One
              </option>
              <option value="excellent">Excellent (720+)</option>
              <option value="good">Good (680-719)</option>
              <option value="fair">Fair (640-679)</option>
              <option value="improving">Building credit</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-value">Property Value *</label>
          <select
            id="q-value"
            name="propertyValue"
            value={formData.propertyValue}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select One
            </option>
            <option value="300-500">$300,000 - $500,000</option>
            <option value="500-750">$500,001 - $750,000</option>
            <option value="750-1m">$750,001 - $1,000,000</option>
            <option value="1m-plus">$1,000,001+</option>
          </select>
        </div>
        <button
          className="apply-btn full"
          type="submit"
          disabled={isSubmitting}
          style={{
            minWidth: "150px",
            padding: "12px 32px",
            fontSize: "16px",
          }}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        {showSuccess && (
          <div
            className="form-note success"
            style={{ marginTop: "10px", color: "#4ade80", fontWeight: "600" }}
          >
            ✓ Your submission was successful.
          </div>
        )}
      </form>
    </div>
  );
}

export default QuotePanel;
