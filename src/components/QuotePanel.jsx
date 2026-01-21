import { useState } from "react";

function QuotePanel({ email = "jgoff@pmfmortgage.com" }) {
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

    // Prepare email data
    const emailData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Create mailto link
    const subject = encodeURIComponent("New Quote Request from Website");
    const body = encodeURIComponent(
      `New quote request received:\n\n${JSON.stringify(emailData, null, 2)}\n\nPlease follow up with the customer.`,
    );

    // Open default email client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Show success message
    setShowSuccess(true);
    setIsSubmitting(false);

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
