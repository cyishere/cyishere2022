import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <h1>
          &lt;c
          <span role="img" aria-label="Vulcan Salute">
            🖖🏻
          </span>
          ishere /&gt;
        </h1>
      </header>
      {children}
    </div>
  )
}

export default Layout
