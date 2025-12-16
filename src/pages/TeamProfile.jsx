import { useParams } from 'react-router-dom'
import QuotePanel from '../components/QuotePanel'
import { teamMembers } from '../data/content'

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
          {member.bio.split(/\n\s*\n/).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
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
          Pioneer Mortgage Funding, Inc. vision is to be your #1 mortgage broker nationwide. Pioneer agents are
          committed to walking you through the home buying process — let’s see what you qualify for.
        </p>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register?time=1765892386601">
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

export default TeamProfile
