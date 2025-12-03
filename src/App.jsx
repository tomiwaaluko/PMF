import { useEffect } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import './App.css'

const programCards = [
  {
    title: 'FHA Loans',
    image:
      'https://lendinginflorida.com/wp-content/uploads/2020/04/financial-accountant-with-mockup-house-consulting-EAGGKKA11-1.jpg',
    description:
      'Loans that allow flexible underwriting so more buyers can qualify for homeownership.',
    link: 'https://lendinginflorida.com/fha-loan-florida/',
  },
  {
    title: 'Non-Owner/Investor Loans',
    image:
      'https://lendinginflorida.com/wp-content/uploads/2020/04/real-estate-agency-couple-looking-at-a-model-of-th-MR4CFJA1.jpg',
    description:
      'Financing built for investment properties with options that prioritize cash flow.',
    link: 'https://lendinginflorida.com/home-equity-loan-rates/',
  },
  {
    title: 'VA Loans',
    image: 'https://lendinginflorida.com/wp-content/uploads/2023/07/va-pic.jpg',
    description: 'Zero down payment options for eligible veterans and active-duty service members.',
    link: 'https://lendinginflorida.com/va-loan/',
  },
  {
    title: '15-30 Year Fixed Rate Mortgages',
    image:
      'https://lendinginflorida.com/wp-content/uploads/2020/08/Oceans-lending-background-13.jpg',
    description: 'Predictable monthly payments with fixed rates and terms up to 30 years.',
    link: 'https://lendinginflorida.com/current-mortgage-rates-florida/',
  },
  {
    title: 'Conventional Financing',
    image:
      'https://lendinginflorida.com/wp-content/uploads/2020/08/Oceans-lending-background-12.jpg',
    description: 'Competitive rates for borrowers with solid credit and down payment options.',
    link: 'https://lendinginflorida.com/home-buying-process/',
  },
]

const steps = [
  {
    title: 'Choose Loan Amount',
    copy:
      'It is recommended to look for homes that cost no more than three to five times annual household income.',
  },
  {
    title: 'Get Your Loan Approved',
    copy: 'We handle the paperwork, requirements, and coordination to keep your closing on time.',
  },
  {
    title: 'Get Your Cash for New Home Purchase',
    copy:
      'Once approvals are complete, we finalize funding so you can move into your new home with confidence.',
  },
]

const stats = [
  {
    label: 'Rates as low as:',
    value: 'From 4%',
    icon: 'https://lendinginflorida.com/wp-content/uploads/2023/07/graphics-new.png',
  },
  {
    label: 'Amount of credit:',
    value: 'Up to $10M',
    icon: 'https://lendinginflorida.com/wp-content/uploads/2023/07/Saving-icon-new.png',
  },
  {
    label: 'Close in as little as:',
    value: '14 days!',
    icon: 'https://lendinginflorida.com/wp-content/uploads/2023/07/lending-Icons.png',
  },
  {
    label: 'Loan terms available:',
    value: 'Up to 40 years!',
    icon: 'https://lendinginflorida.com/wp-content/uploads/2023/07/lending-Icons-new.png',
  },
]

const teamMembers = [
  {
    slug: 'joshua-goff',
    name: 'Joshua Goff',
    role: 'Branch Manager',
    nmls: 'NMLS #186207',
    bio: "As the Branch Manager of the Lake Mary, FL location of Pioneer Mortgage Funding, Joshua Goff facilitates the needs of Home Owners in Central Florida and the surrounding counties of Orange, Seminole, and Volusia. Joshua strives to meet the needs of his clients in Central Florida and throughout the State. Joshua is a devoted father of one, raising his daughter with his beautiful wife of 4 years. Together, they love boating, theme parks, and spending time with family.",
    phone: '(321) 332-5944',
    office: '407-217-9122',
    email: 'jgoff@pmfmortgage.com',
    image:
      'https://lendinginflorida.com/wp-content/uploads/2023/07/New-Oceans-lending-Jan-3-737x1024.png',
    quote:
      'I intently listen to the requests of my clients and my primary goal is to deliver upon those requests in a timely manner.',
    heroBg:
      'https://lendinginflorida.com/wp-content/uploads/2020/08/financial-stock-market-graph-on-technology-abstract-background-picture-id1049838446-1024x683.jpg',
  },
  {
    slug: 'andy-hall',
    name: 'Andy Hall',
    role: 'Mortgage Loan Originator',
    nmls: 'NMLS #1904744',
    bio: 'Whether you are interested in a Conventional, FHA, VA or USDA loan, Andy can help you navigate the ins and outs of the mortgage process. Andy prides himself on bringing professionalism and a sense of humor to every transaction. His goal is to close on time and have fun doing it.',
    phone: '407-961-0933',
    office: '407-605-0327',
    email: 'ahall@pmfmortgage.com',
    image: 'https://lendinginflorida.com/wp-content/uploads/2023/07/sr.png',
    quote: 'I understand home loans can be complicated and scary. My goal is to have you focus on your new home experience and let me handle the rest of it.',
    heroBg:
      'https://lendinginflorida.com/wp-content/uploads/2020/08/financial-stock-market-graph-on-technology-abstract-background-picture-id1049838446-1024x683.jpg',
  },
  {
    slug: 'luis-alban',
    name: 'Luis Alban',
    role: 'Mortgage Loan Originator',
    nmls: 'NMLS #2065485',
    bio: 'Luis Alban is a loan officer at the Lake Mary location of Pioneer Mortgage Funding. Prior to joining the industry, Luis served in the United States Marine Corps. His experience in the armed forces gave him characteristics that prove to be a key tool in his success as a loan officer. He takes pride in being as educated as possible when it comes to mortgages and being honest and responsive while building positive relations with every client.',
    phone: '407-272-2538',
    office: '407-605-0332',
    email: 'lalban@pmfmortgage.com',
    image: 'https://lendinginflorida.com/wp-content/uploads/2023/07/luis-Oceans-blur.png',
    quote:
      'With deep roots in the community here in central Florida, Luis always has a source to tap into in order to make sure he serves you well.',
    heroBg:
      'https://lendinginflorida.com/wp-content/uploads/2020/08/financial-stock-market-graph-on-technology-abstract-background-picture-id1049838446-1024x683.jpg',
  },
]

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About us',
    to: '/about',
    children: [
      {
        label: 'Meet The Team',
        to: '/#team',
        children: teamMembers.map((m) => ({ label: m.name, to: `/team/${m.slug}` })),
      },
      { label: 'Privacy Policy', to: 'https://www.thryv.com/client-privacy-policy/', external: true },
    ],
  },
  { label: 'Programs', to: '/#programs' },
  { label: 'Team', to: '/#team' },
  {
    label: 'Apply Now',
    to: 'https://yourkey.mymortgage-online.com/loan-app/?siteId=5842573753&lar=ahall&workFlowId=99040',
    external: true,
  },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function TopBar() {
  return (
    <div className="top-bar">
      <span className="muted">Helping you find the right mortgage in Lake Mary, FL</span>
      <span>Call: (407) 217-9122</span>
      <span>3098 W Lake Mary Blvd 2nd Floor Lake Mary, FL 32746</span>
      <a href="https://yourkey.mymortgage-online.com/loan-app/?siteId=5842573753&lar=ahall&workFlowId=99040">
        <button className="apply-btn">Apply Online</button>
      </a>
    </div>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <div>
          <strong>Pioneer Mortgage Funding</strong>
          <div style={{ color: '#4a5677', fontWeight: 600 }}>Lake Mary, FL</div>
        </div>
      </div>
      <div className="menu">
        {navLinks.map((link) => {
          if (!link.children) {
            return link.external ? (
              <a key={link.label} href={link.to}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            )
          }

          return (
            <div key={link.label} className="nav-item">
              <Link to={link.to}>{link.label} +</Link>
              <div className="dropdown">
                {link.children.map((child) => {
                  if (child.children) {
                    return (
                      <div key={child.label} className="nav-item">
                        <Link to={child.to}>{child.label} +</Link>
                        <div className="dropdown">
                          {child.children.map((sub) => (
                            <Link key={sub.label} to={sub.to}>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return child.external ? (
                    <a key={child.label} href={child.to}>
                      {child.label}
                    </a>
                  ) : (
                    <Link key={child.label} to={child.to}>
                      {child.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

function QuotePanel() {
  return (
    <div className="quote-panel">
      <div className="eyebrow" style={{ color: '#7e8ab8' }}>
        Find Your Financing Options for Home Purchases &amp; Re-Financing
      </div>
      <h2>Get a Personalized Quote Today</h2>
      <form className="quote-form">
        <div className="form-grid form-grid-2">
          <div className="field">
            <label htmlFor="q-name">Name</label>
            <input id="q-name" placeholder="Name" />
          </div>
          <div className="field">
            <label htmlFor="q-last">Last Name</label>
            <input id="q-last" placeholder="Last Name" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-email">Email</label>
          <input id="q-email" placeholder="Email" />
        </div>
        <div className="form-grid form-grid-2">
          <div className="field">
            <label htmlFor="q-loan">Type Of Loan</label>
            <select id="q-loan" defaultValue="">
              <option value="" disabled>
                Select One
              </option>
              <option>Purchase</option>
              <option>Refinance</option>
              <option>Investment / DSCR</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="q-credit">Credit History</label>
            <select id="q-credit" defaultValue="">
              <option value="" disabled>
                Select One
              </option>
              <option>Excellent (720+)</option>
              <option>Good (680-719)</option>
              <option>Fair (640-679)</option>
              <option>Building credit</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-value">Property Value</label>
          <select id="q-value" defaultValue="">
            <option value="" disabled>
              Select One
            </option>
            <option>$300,000 - $500,000</option>
            <option>$500,001 - $750,000</option>
            <option>$750,001 - $1,000,000</option>
            <option>$1,000,001+</option>
          </select>
        </div>
        <button className="apply-btn full" type="button">
          Send
        </button>
      </form>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span>Our Team</span>
            <span style={{ width: 36, height: 2, background: '#ffd369', display: 'inline-block' }} />
          </div>
          <h1>Find the best rate for your home purchase or refinance.</h1>
          <p>
            We work with 80+ different online mortgage lenders to find the best home loan offers for
            your home purchase or reinvestment. Our team is committed and ready to help make it easy
            to get you to the closing table with the best rate and in as little as 14 days.
          </p>
          <div className="cta-row">
            <a href="https://yourkey.mymortgage-online.com/loan-app/?siteId=5842573753&lar=ahall&workFlowId=99040">
              <button className="apply-btn">Get Pre-Approved</button>
            </a>
            <a className="ghost-btn" href="tel:4072179122">
              Call (407) 217-9122
            </a>
          </div>
        </div>
        <img
          className="hero-mark"
          src="https://lendinginflorida.com/wp-content/uploads/2023/06/h-watewrmark-2-1024x669.png"
          alt="Pioneer watermark"
        />
      </section>

      <section className="section programs" id="programs">
        <div className="section-header">
          <div className="eyebrow">Programs</div>
          <h2>Explore popular mortgage options</h2>
          <p>From VA to renovation loans, we can tailor financing to your next purchase or refi.</p>
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
            <div className="eyebrow" style={{ color: '#ba8100' }}>
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
            <div className="eyebrow" style={{ color: '#ffd369' }}>
              Find Your Financing Options for Home Purchases &amp; Re-Financing
            </div>
            <h2>Get a Personalized Quote Today</h2>
            <p className="quote-sub">
              Share a few details and we&apos;ll tailor a mortgage plan for you. No obligation, just clear
              numbers.
            </p>
          </div>

          <form className="quote-form">
            <div className="form-grid form-grid-3">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="First Name" />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" placeholder="Last Name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" />
              </div>
              <div className="field">
                <label htmlFor="loanType">Type Of Loan *</label>
                <select id="loanType" name="loanType" defaultValue="">
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
                <select id="creditHistory" name="creditHistory" defaultValue="">
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
                <select id="propertyValue" name="propertyValue" defaultValue="">
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
            <button className="apply-btn" type="button">
              Send
            </button>
            <div className="form-note success">✓ Your submission was successful.</div>
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
              Competition is at an all-time high, and new realtors are finding it difficult to find
              clients. By the time a house is listed, the entire city enters a race to the finish
              line.
            </p>
            <p>
              Our Preferred Partner Realtor Program is designed to help you kickstart or grow your
              career. Lake Mary residents search for mortgage lenders every day — we can help match
              them with you so you can keep your business rolling.
            </p>
            <div className="cta-row">
              <a className="apply-btn" href="https://lendinginflorida.com/qualified-homeowner-leads/">
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
                <img className="team-photo" src={person.image} alt={person.name} />
              </Link>
              <div className="content">
                <h3>{person.name}</h3>
                <div className="role">{person.role}</div>
                <p>{person.bio}</p>
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
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          Ready to move?
        </div>
        <h2>Don’t Miss Your Perfect House – Apply today!</h2>
        <p>
          Pioneer Mortgage Funding, Inc. vision is to be your #1 mortgage broker nationwide. Pioneer
          agents are committed to walking you through the home buying process — let’s see what you
          qualify for.
        </p>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <a href="https://yourkey.mymortgage-online.com/loan-app/?siteId=5842573753&lar=ahall&workFlowId=99040">
            <button className="apply-btn">Get a Quote</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Talk with us
          </a>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-overlay" />
        <div className="about-copy">
          <div className="eyebrow">About Us</div>
          <h1>Our mission, values, and motto</h1>
          <p>For decades, we’ve been passionate about achieving better results for our clients.</p>
        </div>
      </section>

      <section className="mission-cards section">
        <div className="mission-grid">
          <div className="mission-card">
            <img src="https://lendinginflorida.com/wp-content/uploads/2023/07/graphics-new.png" alt="" />
            <h3>Our Vision</h3>
            <p>
              Pioneer’s vision is to be your #1 mortgage broker nationwide. Our agents are committed to
              educate and communicate with every single client with two goals in mind: To show every
              client we care and to earn their trust.
            </p>
          </div>
          <div className="mission-card">
            <img src="https://lendinginflorida.com/wp-content/uploads/2023/07/lending-Icons.png" alt="" />
            <h3>Our Mission</h3>
            <p>
              Pioneer’s mission is to become the mortgage industry standard by elevating customer
              relationships and service. Our corporate platform is built on high morals and ethics, honor
              and integrity.
            </p>
          </div>
          <div className="mission-card photo-card">
            <img
              src="https://lendinginflorida.com/wp-content/uploads/2020/04/real-estate-agency-couple-looking-at-a-model-of-th-MR4CFJA1.jpg"
              alt="Happy family"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function TeamProfile() {
  const { slug } = useParams()
  const member = teamMembers.find((m) => m.slug === slug) || teamMembers[0]

  return (
    <>
      <section className="profile-hero" style={{ backgroundImage: `url(${member.heroBg})` }}>
        <div className="profile-overlay" />
        <div className="profile-inner">
          <div className="profile-avatar">
            <img src={member.image} alt={member.name} />
          </div>
          <h1>{member.name}</h1>
          <div className="profile-role">
            {member.role} | {member.nmls}
          </div>
          <div className="profile-contact">
            <span>Phone: {member.phone}</span>
            <span>Office: {member.office}</span>
            <span>Email: {member.email}</span>
          </div>
        </div>
      </section>

      <section className="section profile-body">
        <div className="profile-bio">
          <h2>About</h2>
          <p>{member.bio}</p>
          {member.quote && <blockquote>“{member.quote}”</blockquote>}
        </div>
        <QuotePanel />
      </section>

      <section className="section cta-wide">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          Ready to move?
        </div>
        <h2>Don’t Miss Your Perfect House – Apply today!</h2>
        <p>
          Pioneer Mortgage Funding, Inc. vision is to be your #1 mortgage broker nationwide. Pioneer
          agents are committed to walking you through the home buying process — let’s see what you
          qualify for.
        </p>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <a href="https://yourkey.mymortgage-online.com/loan-app/?siteId=5842573753&lar=ahall&workFlowId=99040">
            <button className="apply-btn">Get a Quote</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Talk with us
          </a>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <div className="page">
      <ScrollToTop />
      <TopBar />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team/:slug" element={<TeamProfile />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <footer className="footer">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <div>
            <strong>Pioneer Mortgage Funding, Inc — Lake Mary</strong>
            <div>3098 W Lake Mary Blvd 2nd Floor Lake Mary, FL 32746</div>
            <div>(407) 217-9122 • info@lendinginflorida.com</div>
          </div>
          <small>NMLS #2431716</small>
        </div>
      </footer>
    </div>
  )
}

export default App
