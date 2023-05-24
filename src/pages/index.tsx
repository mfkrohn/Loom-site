import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#131313",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        LOOM-site beta
      </h1>
      <br />
      <span style={headingAccentStyles}>🚧 Under construction 🚧</span>
      <br/>
      <StaticImage src="../images/daddy.png" alt="Daddy Can"></StaticImage>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
