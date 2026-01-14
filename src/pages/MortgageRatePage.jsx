import { useState } from "react";

function MortgageRatePage() {
  const [loanAmount, setLoanAmount] = useState("300000");
  const [loanTerm, setLoanTerm] = useState("30");

  // Sample rates - in production, these would come from an API
  const mortgageRates = {
    conventional: {
      30: 7.125,
      20: 6.875,
      15: 6.625,
    },
    fha: {
      30: 6.875,
      15: 6.375,
    },
    va: {
      30: 6.75,
      15: 6.25,
    },
  };

  const calculatePayment = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    return (
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    );
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getRateComparisons = () => {
    const amount = parseFloat(loanAmount);
    const term = loanTerm;
    const comparisons = [];

    if (mortgageRates.conventional[term]) {
      comparisons.push({
        type: "Conventional",
        rate: mortgageRates.conventional[term],
        payment: calculatePayment(
          amount,
          mortgageRates.conventional[term],
          parseInt(term)
        ),
        description: "Best for borrowers with good credit and 20% down",
      });
    }

    if (mortgageRates.fha[term]) {
      comparisons.push({
        type: "FHA",
        rate: mortgageRates.fha[term],
        payment: calculatePayment(
          amount,
          mortgageRates.fha[term],
          parseInt(term)
        ),
        description: "Lower down payment option, as low as 3.5%",
      });
    }

    if (mortgageRates.va[term]) {
      comparisons.push({
        type: "VA",
        rate: mortgageRates.va[term],
        payment: calculatePayment(
          amount,
          mortgageRates.va[term],
          parseInt(term)
        ),
        description: "For veterans and active military, 0% down",
      });
    }

    return comparisons;
  };

  const comparisons = getRateComparisons();

  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Current Mortgage Rates</h1>
          <p>
            Compare current mortgage rates across different loan types to find
            the best option for your situation.
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
          <div className="eyebrow">Rate Comparison Tool</div>
          <h2>Compare Mortgage Rates</h2>

          <div style={{ marginTop: "2rem", display: "grid", gap: "1.5rem" }}>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "600",
                }}
              >
                Loan Amount
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
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
                Loan Term
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
                <option value="30">30 years</option>
                <option value="20">20 years</option>
                <option value="15">15 years</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: "2rem", display: "grid", gap: "1rem" }}>
            {comparisons.map((comp, index) => (
              <div
                key={index}
                style={{
                  padding: "1.5rem",
                  backgroundColor: index === 0 ? "#e7f3ff" : "#f8f9fa",
                  borderRadius: "8px",
                  border:
                    index === 0 ? "2px solid #0c2f87" : "1px solid #dee2e6",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        color: "#0c2f87",
                        fontSize: "1.5rem",
                      }}
                    >
                      {comp.type} Loan
                      {index === 0 && (
                        <span
                          style={{
                            fontSize: "0.75rem",
                            marginLeft: "0.5rem",
                            color: "#28a745",
                          }}
                        >
                          ★ Lowest Rate
                        </span>
                      )}
                    </h3>
                    <p
                      style={{
                        margin: "0.5rem 0 0 0",
                        fontSize: "0.875rem",
                        color: "#666",
                      }}
                    >
                      {comp.description}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#666",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Interest Rate
                    </div>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#0c2f87",
                      }}
                    >
                      {comp.rate.toFixed(3)}%
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#666",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Monthly Payment
                    </div>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#0c2f87",
                      }}
                    >
                      {formatCurrency(comp.payment)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "#fff3cd",
              borderRadius: "4px",
              fontSize: "0.875rem",
            }}
          >
            <strong>Note:</strong> These are sample rates for illustration
            purposes. Actual rates vary based on credit score, down payment,
            location, and market conditions. Contact us for personalized rate
            quotes.
          </div>
        </div>

        <div className="program-block accent">
          <h3>Factors that affect your rate:</h3>
          <ul>
            <li>Credit score and payment history</li>
            <li>Down payment amount and loan-to-value ratio</li>
            <li>Loan type (Conventional, FHA, VA, USDA)</li>
            <li>Property type and location</li>
            <li>Debt-to-income ratio</li>
            <li>Loan term (15-year, 30-year, adjustable)</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Get your personalized rate quote</h3>
          <p>
            Ready to see what rates you qualify for? Our mortgage experts will
            analyze your unique financial situation and provide you with current
            rate options across multiple loan programs. We work with over 80+
            lenders to ensure you get the most competitive rate available.
          </p>
        </div>
        <div className="program-block">
          <h3>Rate lock protection</h3>
          <p>
            Once you find the right rate, we offer rate lock options to protect
            you from market fluctuations during your loan process. This gives
            you peace of mind knowing your rate won't increase before closing,
            even if market conditions change.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Ready to explore your rate options?</h2>
        <p>
          Connect with our team to get a personalized rate quote based on your
          unique financial profile.
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Get Started</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Call Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default MortgageRatePage;
