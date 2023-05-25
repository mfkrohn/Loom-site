import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {StaticImage} from "gatsby-plugin-image";
import {PageLayout} from "../components/PageLayout";

const pageStyles = {
    color: "#fbfbfb",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
    color: "#eaeaea",
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <main style={pageStyles}>
                <h1 style={headingStyles}>
                    LOOM-site beta
                </h1>
                <br/>
                <span style={headingAccentStyles}>🚧 Under construction 🚧</span>
                <br/>
                <StaticImage src="../images/daddy.png" alt="Daddy Can" placeholder={"blurred"}></StaticImage>
            </main>
        </PageLayout>

    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
