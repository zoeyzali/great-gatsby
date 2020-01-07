import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from '../components/Home/Info'
import Menu from "../components/Home/Menu"
import ProductsList from "../components/Home/ProductsList"
import Contact from '../components/Home/Contact'


const IndexPage = ( { data } ) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`,
      `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Gatsby Coffee" styleClass="default-bg" />
    <Info />
    <Menu items={data.menu} />
    <ProductsList />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "default-backgroundImg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
    menu: allContentfulCoffeeItems {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed(width: 50, height: 50) {
...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
