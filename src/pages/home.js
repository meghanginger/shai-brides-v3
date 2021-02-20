import React from 'react';
import SEO from "../components/SEO";
import Live from "../components/Live";
import Layout from "../components/general/Layout";
import ScrollAnchor from "../components/general/ScrollAnchor";
import Landing from "../components/Landing";
import Bio from "../components/Bio";
import Merch from "../components/Merch";

const home = ({ data }) => (
  <Layout>
    <SEO title="SHAI BRIDES" />
    <h1 className="fixed text-transparent">
      Shai Brides
    </h1>
    <Landing data={data} />
    <ScrollAnchor linkId="live" />
    <Live />
    <ScrollAnchor linkId="about-the-band" />
    <Bio data={data}/>
    <ScrollAnchor linkId="merch" />
    <Merch data={data}/>
  </Layout>
)

/*
<ScrollAnchor linkId="live" />
    <Live />
    <ScrollAnchor linkId="about-the-band" />
*/
export const query = graphql`
  query {
    homeDesktop: file(relativePath: { eq: "vitsDesktop.jpeg" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeMobile: file(relativePath: { eq: "vitsMobile.jpeg" }) {
    childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bioPhoto: file(relativePath: { eq: "bio.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  frontShirtEcru: file(relativePath: { eq: "tshirts/front-ecru.png" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
  frontShirtBlue: file(relativePath: { eq: "tshirts/front-blue.png" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  backShirtEcru: file(relativePath: { eq: "tshirts/back-ecru.png" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  backShirtBlue: file(relativePath: { eq: "tshirts/back-blue.png" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  merchPhoto: file(relativePath: { eq: "globeBand.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
 `
export default home;