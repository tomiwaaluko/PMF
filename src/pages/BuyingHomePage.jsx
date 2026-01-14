import { useState } from "react";

function BuyingHomePage() {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("7.0");
  const [loanTerm, setLoanTerm] = useState("30");
  const [propertyTax, setPropertyTax] = useState("");
  const [homeInsurance, setHomeInsurance] = useState("");
  const [hoaFees, setHoaFees] = useState("");
  const [results, setResults] = useState(null);

  const calculatePayment = (e) => {
    e.preventDefault();

    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseInt(loanTerm) * 12;
    const tax = parseFloat(propertyTax) || 0;
    const insurance = parseFloat(homeInsurance) || 0;
    const hoa = parseFloat(hoaFees) || 0;

    const loanAmount = price - down;
    const downPercent = (down / price) * 100;

    // Calculate PMI if down payment is less than 20%
    const pmi = downPercent < 20 ? (loanAmount * 0.005) / 12 : 0;

    // Calculate monthly mortgage payment (P&I)
    const monthlyPayment =
      (loanAmount * (rate * Math.pow(1 + rate, term))) /
      (Math.pow(1 + rate, term) - 1);

    const totalMonthly = monthlyPayment + tax / 12 + insurance / 12 + hoa + pmi;
    const totalInterest = monthlyPayment * term - loanAmount;
    const totalCost = monthlyPayment * term + down;

    setResults({
      loanAmount,
      downPercent,
      monthlyPrincipalInterest: monthlyPayment,
      monthlyTax: tax / 12,
      monthlyInsurance: insurance / 12,
      monthlyHOA: hoa,
      monthlyPMI: pmi,
      totalMonthly,
      totalInterest,
      totalCost,
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Mortgage Payment Calculator</h1>
          <p>
            Calculate your monthly mortgage payment including taxes, insurance,
            and HOA fees.
          </p>
          <div className="cta-row">
            <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
              <button className="apply-btn">Apply Now</button>
            </a>
            <a className="ghost-btn" href="tel:4072179122">
              Call (407) 217-9122
            </a>
          </div>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <div className="eyebrow">Payment Calculator</div>
          <h2>Estimate Your Monthly Mortgage Payment</h2>

          <form onSubmit={calculatePayment} style={{ marginTop: "2rem" }}>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Home Price
                </label>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(e.target.value)}
                  placeholder="e.g., 350000"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Down Payment
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="e.g., 70000"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.125"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    Loan Term (years)
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  >
                    <option value="15">15 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    Annual Property Tax
                  </label>
                  <input
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(e.target.value)}
                    placeholder="e.g., 4200"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    Annual Insurance
                  </label>
                  <input
                    type="number"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(e.target.value)}
                    placeholder="e.g., 1800"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    Monthly HOA Fees
                  </label>
                  <input
                    type="number"
                    value={hoaFees}
                    onChange={(e) => setHoaFees(e.target.value)}
                    placeholder="e.g., 150"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "#0c2f87",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginTop: "1rem",
                }}
              >
                Calculate Payment
              </button>
            </div>
          </form>

          {results && (
            <div
              style={{
                marginTop: "2rem",
                padding: "2rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "2px solid #0c2f87",
              }}
            >
              <h3 style={{ marginBottom: "1.5rem", color: "#0c2f87" }}>
                Your Monthly Payment Breakdown
              </h3>

              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  borderLeft: "4px solid #0c2f87",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#666",
                    marginBottom: "0.25rem",
                  }}
                >
                  Total Monthly Payment
                </div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#0c2f87",
                  }}
                >
                  {formatCurrency(results.totalMonthly)}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                    color: "#666",
                  }}
                >
                  Loan Amount: {formatCurrency(results.loanAmount)} (
                  {results.downPercent.toFixed(1)}% down)
                </div>
              </div>

              <div style={{ display: "grid", gap: "0.75rem" }}>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Principal & Interest</span>
                  <strong style={{ fontSize: "1.125rem" }}>
                    {formatCurrency(results.monthlyPrincipalInterest)}
                  </strong>
                </div>

                {results.monthlyTax > 0 && (
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Property Tax</span>
                    <strong style={{ fontSize: "1.125rem" }}>
                      {formatCurrency(results.monthlyTax)}
                    </strong>
                  </div>
                )}

                {results.monthlyInsurance > 0 && (
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Home Insurance</span>
                    <strong style={{ fontSize: "1.125rem" }}>
                      {formatCurrency(results.monthlyInsurance)}
                    </strong>
                  </div>
                )}

                {results.monthlyHOA > 0 && (
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>HOA Fees</span>
                    <strong style={{ fontSize: "1.125rem" }}>
                      {formatCurrency(results.monthlyHOA)}
                    </strong>
                  </div>
                )}

                {results.monthlyPMI > 0 && (
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "#fff3cd",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>PMI (Private Mortgage Insurance)</span>
                    <strong style={{ fontSize: "1.125rem" }}>
                      {formatCurrency(results.monthlyPMI)}
                    </strong>
                  </div>
                )}
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1.5rem",
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <h4 style={{ marginBottom: "1rem" }}>Loan Summary</h4>
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Total Interest Paid:</span>
                    <strong>{formatCurrency(results.totalInterest)}</strong>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Total Cost of Home:</span>
                    <strong>{formatCurrency(results.totalCost)}</strong>
                  </div>
                </div>
              </div>

              {results.monthlyPMI > 0 && (
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    backgroundColor: "#fff3cd",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  <strong>Note:</strong> PMI is required when down payment is
                  less than 20%. You can request PMI removal once you reach 20%
                  equity.
                </div>
              )}
            </div>
          )}
        </div>

        <div className="program-block accent">
          <h3>Understanding Your Payment</h3>
          <ul>
            <li>
              <strong>Principal & Interest:</strong> Your base mortgage payment
            </li>
            <li>
              <strong>Property Tax:</strong> Annual taxes divided by 12 months
            </li>
            <li>
              <strong>Home Insurance:</strong> Required protection for your
              investment
            </li>
            <li>
              <strong>PMI:</strong> Required if down payment is less than 20%
            </li>
            <li>
              <strong>HOA Fees:</strong> Community association fees if
              applicable
            </li>
          </ul>
          <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
            Remember to budget for utilities, maintenance, and repairs in
            addition to your mortgage payment.
          </p>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Getting pre-approved</h3>
          <p>
            Before you start house hunting, get pre-approved for a mortgage.
            This shows sellers you're a serious buyer and gives you a clear
            budget. The pre-approval process involves submitting financial
            documentation and having your credit reviewed. You'll receive a
            pre-approval letter stating how much you can borrow.
          </p>
          <p>
            Pre-approval is different from pre-qualification. Pre-qualification
            is an estimate based on self-reported information, while
            pre-approval involves verification of your finances and carries more
            weight with sellers.
          </p>
        </div>
        <div className="program-block">
          <h3>Finding the right home</h3>
          <p>
            Work with a trusted real estate agent who knows your local market.
            Consider location, school districts, commute times, and neighborhood
            amenities. Don't just focus on the house itself—think about resale
            value and long-term appreciation potential.
          </p>
          <p>
            Attend open houses, schedule private showings, and take your time.
            It's important to find a home that meets both your current needs and
            future goals. Don't feel pressured to settle—the right home is worth
            the wait.
          </p>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Making an offer and negotiating</h3>
          <p>
            When you find the right home, your agent will help you prepare a
            competitive offer based on comparable sales, market conditions, and
            the property's condition. Your offer should include contingencies
            for financing, inspection, and appraisal to protect your interests.
          </p>
          <p>
            Be prepared for counteroffers and negotiations. In competitive
            markets, you may need to act quickly and make your best offer
            upfront. Your agent will guide you through the negotiation process
            to help you secure the home at a fair price.
          </p>
        </div>
        <div className="program-block">
          <h3>Closing on your home</h3>
          <p>
            Once your offer is accepted, you'll enter the closing process. This
            includes a home inspection, appraisal, final loan approval, and
            title search. You'll review and sign closing documents, pay closing
            costs, and receive the keys to your new home.
          </p>
          <p>
            The closing process typically takes 30-45 days but can be faster or
            slower depending on your situation. Stay in close contact with your
            lender and agent to ensure everything stays on track for a smooth
            closing.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Ready to start your home buying journey?</h2>
        <p>
          Our experienced team is here to guide you through every step of the
          home buying process. Let's get started on finding your dream home!
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Get Pre-Approved</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

export default BuyingHomePage;
