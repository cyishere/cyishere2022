import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>CY is here. | A website of a fullstack developer.</title>
      </Helmet>
      <header>
        <h1>
          &lt;c
          <span role="img" aria-label="Vulcan Salute">
            🖖🏻
          </span>
          ishere /&gt;
        </h1>
      </header>
      <main>
        <p>
          <span role="img" aria-label="Wave Hand">
            👋🏻
          </span>{" "}
          Hi, there! I'm <strong>CY</strong>.
        </p>
        <p>
          <em>This website is under construction.</em>
        </p>
        <p>
          I'll be here soon & thank you for stopping by.{" "}
          <span role="img" aria-label="Cheers">
            🍻
          </span>
        </p>
        <p>
          <a className="link-icon" href="https://github.com/cyishere">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </main>
    </div>
  )
}
