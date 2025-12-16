function FhaLoanPage() {
  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80)',
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">FHA Loans</p>
          <h1>What you need to know before speaking with certified FHA lenders</h1>
          <p>Flexible financing backed by the Federal Housing Administration to help more buyers qualify.</p>
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
          <div className="eyebrow">What is an FHA loan?</div>
          <h2>Government-backed financing with flexible guidelines</h2>
          <p>
            FHA loans are insured by the Federal Housing Administration and built to expand access to homeownership.
            With lenient credit, down payment, and debt-to-income requirements, FHA options help first-time buyers and
            move-up buyers alike secure financing with confidence.
          </p>
        </div>
        <div className="program-block accent">
          <h3>This loan may be right for you if:</h3>
          <ul>
            <li>You are buying your first home and want a low down payment (as little as 3.5%).</li>
            <li>You need flexibility on credit history while still accessing competitive rates.</li>
            <li>You plan to renovate and want to roll improvement costs into one loan.</li>
            <li>You are purchasing a 1–4 unit primary residence and want predictable fixed payments.</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>A unique solution</h3>
          <p>
            FHA loans allow gift funds, flexible qualifying, and seller credits to help with closing costs. Mortgage
            insurance premiums protect the lender, which keeps rates competitive even for borrowers with limited credit
            history. Our team walks you through documentation and timelines so you can close smoothly.
          </p>
        </div>
        <div className="program-block">
          <h3>What to expect</h3>
          <ul>
            <li>Minimum 3.5% down payment for qualified borrowers.</li>
            <li>Upfront and monthly mortgage insurance premiums (MIP).</li>
            <li>Flexible credit score requirements compared to conventional loans.</li>
            <li>Owner-occupied properties only; 1–4 units allowed.</li>
          </ul>
        </div>
      </section>

      <section className="program-cta section">
        <div>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Ready to move?
          </div>
          <h2>Don’t miss your perfect house — apply today!</h2>
          <p>
            Get pre-qualified for an FHA loan and let&apos;s find the best rate and terms for your next home purchase.
            Our loan specialists are ready to guide you every step of the way.
          </p>
        </div>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Get Started</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Talk with us
          </a>
        </div>
      </section>
    </div>
  )
}

export default FhaLoanPage
