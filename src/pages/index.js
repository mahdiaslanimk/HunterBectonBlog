import React from "react"
import {Container, FeatureImage, Content, ContentCard} from "../components"


const IndexPage = () => {
  return (
    <Container>
        <FeatureImage />
        <Content>
          <ContentCard 
          date="2020-12-01" 
          title= "Lorem Ipsum is simply dummy text of the printing "
          exerpt="exerpt: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
          slug="/test" />
        </Content>
    </Container>
  )
}

export default IndexPage