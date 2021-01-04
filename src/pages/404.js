import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const PageNotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>404</title>
      </Helmet>
      <main className="container-md">
        <h2>Page Not Found</h2>
        <p>
          Oops! The page your are looking for has been removed or relocated.
        </p>
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </main>
    </Layout>
  )
}

export default PageNotFound
