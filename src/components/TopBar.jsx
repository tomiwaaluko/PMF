function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-left">
        <a className="top-link" href="tel:4072179122">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.96-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.6a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.96l-2.29 2.27z"
                fill="currentColor"
              />
            </svg>
          </span>
          (407) 217-9122
        </a>
        <a
          className="top-link"
          href="https://www.google.com/maps/search/?api=1&query=3098+W+Lake+Mary+Blvd+2nd+Floor+Lake+Mary,+FL+32746"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2a7 7 0 00-7 7c0 5.25 6.3 11.3 6.58 11.55a1 1 0 001.35 0C12.7 20.3 19 14.25 19 9a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"
                fill="currentColor"
              />
            </svg>
          </span>
          3098 W Lake Mary Blvd 2nd Floor Lake Mary, FL 32746
        </a>
      </div>
      <a href="https://pioneermortgagefunding.my1003app.com/186207/register?time=1765892386601">
        <button className="apply-btn">Apply Online</button>
      </a>
    </div>
  )
}

export default TopBar
