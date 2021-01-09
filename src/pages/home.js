import React from 'react';
import SEO from "../components/SEO";
import Live from "../components/Live";
import Layout from "../components/general/Layout";
import ScrollAnchor from "../components/general/ScrollAnchor";
import Landing from "../components/Landing";
import Bio from "../components/Bio";

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
  }
  
 `
export default home;