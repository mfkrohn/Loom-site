import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

const pageStyles = {
  color: "#dfdfdf",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Hey man, sorry we couldn’t find what you were looking for. What do you wanna talk about?
      </p>
      <StaticImage src="../images/markey_headset.png" width={200} height={300} alt={"Markey Man"}></StaticImage>
      <br/>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
