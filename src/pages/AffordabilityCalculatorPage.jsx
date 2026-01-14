import { useState } from "react";

function AffordabilityCalculatorPage() {
  const [annualIncome, setAnnualIncome] = useState("");
  const [monthlyDebts, setMonthlyDebts] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("7.0");
  const [loanTerm, setLoanTerm] = useState("30");
  const [results, setResults] = useState(null);

  const calculateAffordability = (e) => {
    e.preventDefault();

    const income = parseFloat(annualIncome);
    const debts = parseFloat(monthlyDebts) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseInt(loanTerm) * 12;

    // 28/36 rule: housing shouldn't exceed 28% of gross monthly income
    // Total debt shouldn't exceed 36%
    const monthlyIncome = income / 12;
    const maxHousingPayment = monthlyIncome * 0.28;
    const maxTotalDebt = monthlyIncome * 0.36;
    const maxMortgagePayment = Math.min(
      maxHousingPayment,
      maxTotalDebt - debts
    );

    // Calculate max loan amount using mortgage payment formula
    // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    // Solving for L: L = P * [(1 + c)^n - 1] / [c(1 + c)^n]
    const maxLoanAmount =
      maxMortgagePayment *
      ((Math.pow(1 + rate, term) - 1) / (rate * Math.pow(1 + rate, term)));
    const maxHomePrice = maxLoanAmount + down;

    setResults({
      maxHomePrice: maxHomePrice,
      maxLoanAmount: maxLoanAmount,
      monthlyPayment: maxMortgagePayment,
      monthlyIncome: monthlyIncome,
      housingRatio: (maxMortgagePayment / monthlyIncome) * 100,
      debtRatio: ((maxMortgagePayment + debts) / monthlyIncome) * 100,
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
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Loan Affordability Calculator</h1>
          <p>
            Discover how much home you can afford based on your income, debts,
            and down payment.
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
          <div className="eyebrow">Affordability Calculator</div>
          <h2>Calculate Your Home Buying Budget</h2>

          <form onSubmit={calculateAffordability} style={{ marginTop: "2rem" }}>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Annual Household Income
                </label>
                <input
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                  placeholder="e.g., 75000"
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
                  Monthly Debt Payments (car, credit cards, etc.)
                </label>
                <input
                  type="number"
                  value={monthlyDebts}
                  onChange={(e) => setMonthlyDebts(e.target.value)}
                  placeholder="e.g., 500"
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
                  placeholder="e.g., 20000"
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
                Calculate Affordability
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
                Your Results
              </h3>

              <div style={{ display: "grid", gap: "1rem" }}>
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderLeft: "4px solid #0c2f87",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#666",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Maximum Home Price
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#0c2f87",
                    }}
                  >
                    {formatCurrency(results.maxHomePrice)}
                  </div>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#666",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Maximum Loan Amount
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {formatCurrency(results.maxLoanAmount)}
                  </div>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#666",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Estimated Monthly Payment
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {formatCurrency(results.monthlyPayment)}
                  </div>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "#666",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Housing Ratio
                    </div>
                    <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                      {results.housingRatio.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "#666",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Total Debt Ratio
                    </div>
                    <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                      {results.debtRatio.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>

              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.875rem",
                  color: "#666",
                }}
              >
                * This calculation uses the 28/36 rule. Results are estimates
                and actual approval amounts may vary. Contact us for a
                personalized quote.
              </p>
            </div>
          )}
        </div>

        <div className="program-block accent">
          <h3>Understanding the Results</h3>
          <ul>
            <li>
              <strong>Housing Ratio:</strong> Should be under 28% of gross
              income
            </li>
            <li>
              <strong>Total Debt Ratio:</strong> Should be under 36% of gross
              income
            </li>
            <li>
              <strong>Down Payment:</strong> Larger down payments increase
              buying power
            </li>
            <li>
              <strong>Interest Rate:</strong> Lower rates mean more buying power
            </li>
            <li>These are estimates based on the 28/36 rule</li>
            <li>Different loan programs may have different requirements</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Key factors in affordability</h3>
          <p>
            Your home affordability depends on several factors: your income
            stability, existing debt obligations, credit score, down payment
            size, and the loan program you choose. FHA loans may allow higher
            debt-to-income ratios than conventional loans, potentially
            increasing your buying power.
          </p>
        </div>
        <div className="program-block">
          <h3>Beyond the purchase price</h3>
          <p>
            Remember to factor in all homeownership costs: property taxes,
            homeowners insurance, HOA fees, maintenance, and utilities. These
            expenses can add significantly to your monthly budget and should be
            considered when determining how much home you can comfortably
            afford.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Get a personalized affordability analysis</h2>
        <p>
          Work with our experienced loan officers to get a detailed
          affordability assessment tailored to your unique financial situation
          and goals.
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Get Pre-Qualified</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Speak with an Expert
          </a>
        </div>
      </section>
    </div>
  );
}

export default AffordabilityCalculatorPage;
