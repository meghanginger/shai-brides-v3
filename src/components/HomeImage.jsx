import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 783;

const HomeImage = ({ data }) => (
  <Img
    fluid={isMobile
      ? data.homeMobile.childImageSharp.fluid
      : data.homeDesktop.childImageSharp.fluid}
    alt="Shai brides in forest"
    className="homeImageMobile"
  />
);

HomeImage.propTypes = {
  data: PropTypes.shape({
    homeMobile: {
      childImageSharp: {
        fluid: PropTypes.string.isRequired,
      },
    },
    homeDesktop: {
      childImageSharp: {
        fluid: PropTypes.string.isRequired,
      },
    },
  }).isRequired,
};

export default HomeImage;
