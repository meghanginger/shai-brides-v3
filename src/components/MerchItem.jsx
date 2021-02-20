import React from 'react';
import Img from 'gatsby-image';

const MerchItem = ({ item }) => {
  return (
  <div className="md:p-8 w-full md:w-6/12 flex">
    <Img
    fluid={query.frontPhoto.childImageSharp.fluid}
    alt={item.itemPhotos[0].alt}
    className="w-6/12 md:p-4 h-auto"
    />
    <Img
    fluid={query.backPhoto.childImageSharp.fluid}
    alt={item.itemPhotos[1].alt}
    className="w-6/12 md:p-4 h-auto"
    />
    ))}
  </div>   
)
  }

export default MerchItem;

/*
export const query = graphql`
  query {
    backPhoto: file(relativePath: { eq: item.itemPhotos[0]} }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frontPhoto: file(relativePath: { eq: item.itemPhotos[1]} }) {
    childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
`
*/