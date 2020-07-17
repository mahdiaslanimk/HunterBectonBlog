import React from "react"
import {graphql} from "gatsby"
import {
    Container, 
    Content, 
    ContentCard,
    FeatureImage,
    Pagination,
} from "../components"
import {H1, P} from "../elements"

const allPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges

    return(
        <Container>
            <FeatureImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    Lorem Ipsum is simply dummy text of the printing
                </H1>
                <P color="dark2" textAlign="center">
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
                </P>
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        exerpt={post.node.frontmatter.exerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination 
                isFirst = {isFirst}
                isLast = {isLast}
                prevPage = {prevPage}
                nextPage = {nextPage}
            />
        </Container>
    )

}

export default allPosts

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip , limit: $limit ) {
            edges {
              node {
                frontmatter {
                  slug
                  title
                  date(formatString: "MMMM DD, YYYY")
                  exerpt
                }
              }
            }
        }
    }
`