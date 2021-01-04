import React from 'react';
import SEO from "../components/SEO";
import Live from "../components/Live";
import Layout from "../components/general/Layout";
import ScrollAnchor from "../components/general/ScrollAnchor";
import Landing from "../components/Landing";

const home = ({ data }) => (
  <Layout>
    <SEO title="SHAI BRIDES" />
    <h1 className="visuallyHidden">
      Shai Brides
    </h1>
    <Landing data={data} />
    <ScrollAnchor linkId="live" />
    <Live />
    <ScrollAnchor linkId="about-the-band" />
  </Layout>
)

export const query = graphql`
  query {
    homeDesktop: file(relativePath: { eq: "vits/vitsDesktop.jpeg" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeMobile: file(relativePath: { eq: "vits/vitsMobile.jpeg" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    beachDesktop: file(relativePath: { eq: "beachDesktop.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    honeydewBg: file(relativePath: { eq: "honeydewBg.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      honeydewDesktop: file(relativePath: { eq: "honeydewDesktopReleased.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      honeydewMobile: file(relativePath: { eq: "honeydewMobileReleased.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bioPhoto: file(relativePath: { eq: "vits/robotBand.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 1240) {
                ...GatsbyImageSharpFluid
              }
            }
          }
  }
 `
export default home;