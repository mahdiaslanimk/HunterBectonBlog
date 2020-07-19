import React from "react"
import {Helmet} from "react-helmet"
import {StaticQuery, graphql} from "gatsby"

export const Seo = ({description, keywords, title, image, url, author}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaAuthor = author || data.site.siteMetadata.Author
                const metaUrl = url || data.site.siteMetadata.Url
                const metaImage = image || data.site.siteMetadata.Image
                const metaKeywords = keywords || ["QuPtics","Quantum","Optics","Quantum Optcs","Physics"]
                return(
                    <Helmet
                    title={title}
                    meta={[
                        {
                            name: `description`,
                            content: metaDescription,
                        },
                        {
                            name: `og:title`,
                            content: metaTitle,
                        },
                        {
                            name: `og:description`,
                            content: metaDescription,
                        },
                        {
                            name: `og:type`,
                            content: `website`,
                        },
                        {
                            name: `og:image`,
                            content: metaImage,
                        },
                        {
                            name: `og:url`,
                            content: metaUrl,
                        },
                        {
                            name: `twitter:creator`,
                            content: metaAuthor,
                        },
                        {
                            name: `twitter:title`,
                            content: metaTitle,
                        },
                        {
                            name: `twitter:description`,
                            content: metaDescription,
                        },
                        {
                            name: `twitter:image`,
                            content: metaImage,
                        },
                    ].concat(
                        metaKeywords && metaKeywords.length > 0 ? {
                            name: `keywords`,
                            content: metaKeywords.join(`, `),
                        }: []
                    )}
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
            }
        }
    }
`