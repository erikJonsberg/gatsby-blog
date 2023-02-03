import React from "react";

import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>Hello from the third page</h1>
    <h2>Welcome to page 3</h2>
    <p>I made this</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default ThirdPage