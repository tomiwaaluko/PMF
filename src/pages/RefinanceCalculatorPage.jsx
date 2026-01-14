import { useState } from "react";

function RefinanceCalculatorPage() {
  const [currentLoanAmount, setCurrentLoanAmount] = useState("");
  const [currentRate, setCurrentRate] = useState("");
  const [currentTerm, setCurrentTerm] = useState("");
  const [newRate, setNewRate] = useState("");
  const [newTerm, setNewTerm] = useState("30");
  const [closingCosts, setClosingCosts] = useState("");
  const [results, setResults] = useState(null);

  const calculateMortgagePayment = (principal, rate, term) => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = term * 12;
    return (
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    );
  };

  const calculateRefinance = (e) => {
    e.preventDefault();

    const loanAmount = parseFloat(currentLoanAmount);
    const oldRate = parseFloat(currentRate);
    const oldTerm = parseFloat(currentTerm);
    const refinanceRate = parseFloat(newRate);
    const refinanceTerm = parseInt(newTerm);
    const costs = parseFloat(closingCosts) || 0;

    const currentPayment = calculateMortgagePayment(
      loanAmount,
      oldRate,
      oldTerm
    );
    const newPayment = calculateMortgagePayment(
      loanAmount,
      refinanceRate,
      refinanceTerm
    );
    const monthlySavings = currentPayment - newPayment;
    const breakEvenMonths = costs / Math.abs(monthlySavings);

    const totalCurrentCost = currentPayment * oldTerm * 12;
    const totalNewCost = newPayment * refinanceTerm * 12 + costs;
    const lifetimeSavings = totalCurrentCost - totalNewCost;

    setResults({
      currentPayment,
      newPayment,
      monthlySavings,
      breakEvenMonths,
      lifetimeSavings,
      totalInterestCurrent: totalCurrentCost - loanAmount,
      totalInterestNew: totalNewCost - loanAmount - costs,
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
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Refinance Calculator</h1>
          <p>
            Evaluate whether refinancing makes sense for your situation and see
            your potential savings.
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
          <div className="eyebrow">Refinance Calculator</div>
          <h2>Calculate Your Refinancing Benefits</h2>

          <form onSubmit={calculateRefinance} style={{ marginTop: "2rem" }}>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <h3 style={{ marginTop: "1rem", color: "#0c2f87" }}>
                Current Loan
              </h3>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Current Loan Balance
                </label>
                <input
                  type="number"
                  value={currentLoanAmount}
                  onChange={(e) => setCurrentLoanAmount(e.target.value)}
                  placeholder="e.g., 300000"
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
                    Current Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.125"
                    value={currentRate}
                    onChange={(e) => setCurrentRate(e.target.value)}
                    placeholder="e.g., 6.5"
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
                    Years Remaining
                  </label>
                  <input
                    type="number"
                    value={currentTerm}
                    onChange={(e) => setCurrentTerm(e.target.value)}
                    placeholder="e.g., 27"
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
              </div>

              <h3 style={{ marginTop: "1rem", color: "#0c2f87" }}>New Loan</h3>

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
                    New Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.125"
                    value={newRate}
                    onChange={(e) => setNewRate(e.target.value)}
                    placeholder="e.g., 5.5"
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
                    New Loan Term (years)
                  </label>
                  <select
                    value={newTerm}
                    onChange={(e) => setNewTerm(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  >
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Estimated Closing Costs
                </label>
                <input
                  type="number"
                  value={closingCosts}
                  onChange={(e) => setClosingCosts(e.target.value)}
                  placeholder="e.g., 5000"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                />
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
                Calculate Savings
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
                Your Refinance Analysis
              </h3>

              <div style={{ display: "grid", gap: "1rem" }}>
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor:
                      results.monthlySavings > 0 ? "#d4edda" : "#f8d7da",
                    borderRadius: "4px",
                    borderLeft: `4px solid ${
                      results.monthlySavings > 0 ? "#28a745" : "#dc3545"
                    }`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#666",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Monthly Payment Change
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: results.monthlySavings > 0 ? "#28a745" : "#dc3545",
                    }}
                  >
                    {results.monthlySavings > 0 ? "-" : "+"}
                    {formatCurrency(Math.abs(results.monthlySavings))}
                  </div>
                  <div style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
                    {formatCurrency(results.currentPayment)} →{" "}
                    {formatCurrency(results.newPayment)}
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
                      Break-Even Point
                    </div>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                      {results.breakEvenMonths.toFixed(0)} months
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
                      Lifetime Savings
                    </div>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color:
                          results.lifetimeSavings > 0 ? "#28a745" : "#dc3545",
                      }}
                    >
                      {formatCurrency(results.lifetimeSavings)}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                >
                  <h4 style={{ marginBottom: "1rem" }}>Interest Comparison</h4>
                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Current Loan Total Interest:</span>
                      <strong>
                        {formatCurrency(results.totalInterestCurrent)}
                      </strong>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>New Loan Total Interest:</span>
                      <strong>
                        {formatCurrency(results.totalInterestNew)}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  backgroundColor:
                    results.monthlySavings > 0 ? "#d4edda" : "#fff3cd",
                  borderRadius: "4px",
                  fontSize: "0.875rem",
                }}
              >
                {results.monthlySavings > 0 ? (
                  <p style={{ margin: 0 }}>
                    <strong>✓ Refinancing could be beneficial!</strong> You'll
                    save {formatCurrency(Math.abs(results.monthlySavings))} per
                    month and break even in {results.breakEvenMonths.toFixed(0)}{" "}
                    months.
                  </p>
                ) : (
                  <p style={{ margin: 0 }}>
                    <strong>⚠ Consider carefully:</strong> Your monthly payment
                    would increase by{" "}
                    {formatCurrency(Math.abs(results.monthlySavings))}. However,
                    you may benefit from other factors like shorter term or
                    cash-out options.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="program-block accent">
          <h3>When to Consider Refinancing</h3>
          <ul>
            <li>Interest rates have dropped significantly</li>
            <li>Your credit score has improved substantially</li>
            <li>You want to shorten your loan term to save on interest</li>
            <li>You need to access home equity for renovations</li>
            <li>You want to switch from ARM to fixed-rate mortgage</li>
            <li>You want to remove PMI (Private Mortgage Insurance)</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Types of refinancing</h3>
          <p>
            <strong>Rate-and-term refinance:</strong> Replace your current
            mortgage with a new one featuring a lower interest rate or different
            term length. This is ideal for reducing monthly payments or paying
            off your home faster.
          </p>
          <p>
            <strong>Cash-out refinance:</strong> Borrow more than you owe and
            receive the difference in cash. Use this option to fund home
            improvements, consolidate high-interest debt, or cover major
            expenses.
          </p>
        </div>
        <div className="program-block">
          <h3>Break-even analysis</h3>
          <p>
            Refinancing comes with closing costs, typically 2-5% of the loan
            amount. Our calculator helps you determine how long it will take to
            recoup these costs through monthly savings. If you plan to stay in
            your home beyond the break-even point, refinancing could be a smart
            financial move.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Ready to explore refinancing options?</h2>
        <p>
          Our mortgage experts will analyze your current loan and show you
          exactly how much you could save with a refinance tailored to your
          financial goals.
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Start Your Refinance</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Get a Refinance Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default RefinanceCalculatorPage;
