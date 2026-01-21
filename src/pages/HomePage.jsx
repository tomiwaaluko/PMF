import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { programCards, steps, stats, teamMembers } from "../data/content";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1600&q=80",
    title: "Find the best rate for your home purchase or refinance.",
    description:
      "We work with 80+ different online mortgage lenders to find the best home loan offers for your home purchase or reinvestment. Our team is committed and ready to help make it easy to get you to the closing table with the best rate and in as little as 14 days.",
  },
];

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

    // Send to Joshua Goff (main page)
    const recipients = "jgoff@pmfmortgage.com";

    // Create mailto link with JSON data
    const subject = encodeURIComponent("New Quote Request from Website");
    const body = encodeURIComponent(
      `New quote request received:\n\n${JSON.stringify(
        emailData,
        null,
        2,
      )}\n\nPlease follow up with the customer.`,
    );

    // Open default email client
    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;

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
    <>
      <section className="hero" id="top">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(105deg, rgba(12, 47, 135, 0.85), rgba(47, 110, 230, 0.65)), url(${slide.image})`,
            }}
          >
            <div className="hero-copy">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <div className="cta-row">
                <a href="https://pioneermortgagefunding.my1003app.com/186207/register?time=1765892386601">
                  <button className="apply-btn">Get Pre-Approved</button>
                </a>
              </div>
            </div>
            <img
              className="hero-mark"
              src="https://lendinginflorida.com/wp-content/uploads/2023/06/h-watewrmark-2-1024x669.png"
              alt="Pioneer watermark"
            />
          </div>
        ))}
      </section>

      <section className="section programs" id="programs">
        <div className="section-header">
          <div className="eyebrow">Programs</div>
          <h2>Explore popular mortgage options</h2>
          <p>
            From VA to renovation loans, we can tailor financing to your next
            purchase or refi.
          </p>
        </div>
        <div className="program-grid">
          {programCards.map((card) => (
            <div key={card.title} className="program-card">
              <img src={card.image} alt={card.title} />
              <div className="program-face">
                <h3>{card.title}</h3>
              </div>
              <div className="program-hover">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a className="outline-btn" href={card.link}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <div className="process-layout">
          <div className="process-hero">
            <div className="eyebrow" style={{ color: "#ba8100" }}>
              Our process
            </div>
            <h2>Fast &amp; easy application process</h2>
          </div>
          <div className="process-steps">
            {steps.map((step, idx) => (
              <div className="process-card" key={step.title}>
                <div className="step-head">
                  <span className="step-icon">▶</span>
                  <span className="step-label">Step {idx + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.value} className="stat-card">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.value} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section quote" id="quote">
        <div className="quote-overlay" />
        <div className="quote-content">
          <div className="quote-left">
            <div className="eyebrow" style={{ color: "#ffd369" }}>
              Find Your Financing Options for Home Purchases &amp; Re-Financing
            </div>
            <h2>Get a Personalized Quote Today</h2>
            <p className="quote-sub">
              Share a few details and we&apos;ll tailor a mortgage plan for you.
              No obligation, just clear numbers.
            </p>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-grid form-grid-3">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="loanType">Type Of Loan *</label>
                <select
                  id="loanType"
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
                <label htmlFor="creditHistory">Credit History *</label>
                <select
                  id="creditHistory"
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
              <div className="field field-full">
                <label htmlFor="propertyValue">Property Value *</label>
                <select
                  id="propertyValue"
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
            </div>
            <button className="apply-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            {showSuccess && (
              <div className="form-note success">
                ✓ Your submission was successful.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="section partner" id="partners">
        <div className="partner-content">
          <img
            src="https://lendinginflorida.com/wp-content/uploads/2023/07/realtor-pic-model-2-1019x1024.png"
            alt="Preferred partner realtor"
          />
          <div className="text-block">
            <div className="eyebrow">Preferred Partner Program</div>
            <h2>Attention Realtors!</h2>
            <p>
              Competition is at an all-time high, and new realtors are finding
              it difficult to find clients. By the time a house is listed, the
              entire city enters a race to the finish line.
            </p>
            <p>
              Our Preferred Partner Realtor Program is designed to help you
              kickstart or grow your career. Lake Mary residents search for
              mortgage lenders every day — we can help match them with you so
              you can keep your business rolling.
            </p>
            <div className="cta-row">
              <a className="apply-btn" href="mailto:jgoff@pmfmortgage.com">
                Learn More
              </a>
              <a className="ghost-btn" href="mailto:info@lendinginflorida.com">
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="section-header">
          <div className="eyebrow">Our Team</div>
          <h2>Meet our team!</h2>
          <p>Local experts ready to guide you from application to closing.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((person) => (
            <div key={person.name} className="team-card">
              <Link to={`/team/${person.slug}`}>
                <img
                  className="team-photo"
                  src={person.image}
                  alt={person.name}
                />
              </Link>
              <div className="content">
                <h3>{person.name}</h3>
                <div className="role">{person.role}</div>
                <p>{person.summary}</p>
                <div className="team-meta">
                  <strong>{person.nmls}</strong>
                  <span>Direct: {person.phone}</span>
                  <span>Office: {person.office}</span>
                  <span>Email: {person.email}</span>
                </div>
              </div>
              <div className="team-actions">
                <a className="link" href={`mailto:${person.email}`}>
                  Email
                </a>
                <Link className="link" to={`/team/${person.slug}`}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-wide">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Ready to move?
        </div>
        <h2>Don’t Miss Your Perfect House – Apply today!</h2>
        <p>
          Pioneer Mortgage Funding, Inc. vision is to be your #1 mortgage broker
          nationwide. Pioneer agents are committed to walking you through the
          home buying process — let’s see what you qualify for.
        </p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register?time=1765892386601">
            <button className="apply-btn">Get a Quote</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Talk with us
          </a>
        </div>
      </section>
    </>
  );
}

export default HomePage;
