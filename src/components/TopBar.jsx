function TopBar() {
  return (
    <div className="top-bar">
      <a className="top-link" href="tel:4072179122">
        Call: (407) 217-9122
      </a>
      <a
        className="top-link"
        href="https://www.google.com/maps/search/?api=1&query=3098+W+Lake+Mary+Blvd+2nd+Floor+Lake+Mary,+FL+32746"
        target="_blank"
        rel="noreferrer"
      >
        3098 W Lake Mary Blvd 2nd Floor Lake Mary, FL 32746
      </a>
      <a href="https://yourkey.mymortgage-online.com/loan-app/?siteId=5842573753&lar=ahall&workFlowId=99040">
        <button className="apply-btn">Apply Online</button>
      </a>
    </div>
  )
}

export default TopBar
