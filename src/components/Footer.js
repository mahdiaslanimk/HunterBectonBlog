import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {
    FooterWrapper,
    FooterSocialIcons,
    FooterSocialWrapper,
} from "../elements"

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            }
            linkedin: file(relativePath: {eq: "linkedin.svg"}) {
                publicURL
            }
        }
    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
                        <img src={data.instagram.publicURL} alt="Instagram Logo" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
                        <img src={data.linkedin.publicURL} alt="linkedin Logo" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
                        <img src={data.twitter.publicURL} alt="twitter Logo" />
                    </a>
                </FooterSocialIcons>
                <p>© 2020 QuPtics, All rights reserved.</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}