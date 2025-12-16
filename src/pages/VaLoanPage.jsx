function VaLoanPage() {
  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(12,47,135,0.6), rgba(47,110,230,0.55)), url(https://images.unsplash.com/photo-1474224017046-182ece80b263?auto=format&fit=crop&w=1600&q=80)',
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">VA Loans</p>
          <h1>A VA loan — everything you need to know</h1>
          <p>No down payment for eligible veterans, active-duty service members, and surviving spouses.</p>
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
          <h2>What is a VA loan?</h2>
          <p>
            VA loans are backed by the Department of Veterans Affairs and offer favorable terms to those who have served
            our country. With no required down payment, no PMI, and streamlined qualification, VA financing helps
            eligible borrowers buy, build, or refinance with confidence.
          </p>
        </div>
        <div className="program-block accent">
          <h3>Benefits of VA loans</h3>
          <ul>
            <li>0% down payment for eligible borrowers.</li>
            <li>No private mortgage insurance requirement.</li>
            <li>Competitive interest rates and flexible credit guidelines.</li>
            <li>Streamlined refinance options for rate reductions.</li>
            <li>Limits on closing costs and ability for sellers to contribute.</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>The VA funding fee</h3>
          <p>
            A one-time VA funding fee helps keep the program sustainable. The amount depends on service history, loan
            type, and down payment, and can often be financed into the loan. Disabled veterans may be eligible for a
            funding fee waiver.
          </p>
        </div>
        <div className="program-block">
          <h3>Qualifying & refinancing</h3>
          <ul>
            <li>Certificate of Eligibility (COE) documents service history.</li>
            <li>Income and credit reviewed with VA underwriting standards.</li>
            <li>Cash-out and IRRRL (streamline) refinances available.</li>
            <li>VA loans may be reused; entitlement can be restored after payoff.</li>
          </ul>
        </div>
      </section>

      <section className="program-cta section">
        <div>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Ready to move?
          </div>
          <h2>Use your VA benefits to buy or refinance</h2>
          <p>
            We&apos;ll help you confirm eligibility, compare options, and close on time so you can take full advantage of
            your VA benefits.
          </p>
        </div>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Start My VA Loan</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Talk with us
          </a>
        </div>
      </section>
    </div>
  )
}

export default VaLoanPage
