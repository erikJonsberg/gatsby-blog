import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const BlogLink = styled(Link)`
  text-decoration: none;
  h2 {
    margin-bottom: .25rem;
  }
`


const MainPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/green-river-duck.png"
        loading="lazy"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="logo"
        style={{ marginBottom: `var(--space-3)` }}
      />

      <h1>
        Erik's <b>Blog!</b>
      </h1>
    </div>
    <h4>Number of Posts: {data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <BlogLink to={node.fields.slug}>
          <h2>{node.frontmatter.title}</h2>
          <span>Published on {node.frontmatter.date}</span>
        </BlogLink>
        <p style={{ marginTop: `var(--space-1)` }}>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default MainPage;
