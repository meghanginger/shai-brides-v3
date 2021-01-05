import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import imageURLs from '../data/content-cdn';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 480;
const bgImage = isMobile ? 'Mobile' : 'Desktop';

const Landing = ({ data }) => (
  <>
    <div className=" z-1">
      <Img
        className="h-screen w-auto"
        fluid={isMobile
          ? data.homeMobile.childImageSharp.fluid
          : data.homeDesktop.childImageSharp.fluid}
        alt="Band in room with party lights"
      />
    </div>
    <div className="absolute left-1 top-2 w-3/6 md:w-2/6">
      <img src={imageURLs.Logos.white} className={`logoHome${bgImage}`} alt="Shai Brides Logo" />
    </div>
    <div className="absolute w-screen h-screen top-0 flexColCenter justify-end">
      <img src={imageURLs.Vits.logo} className="w-9/12 md:w-5/12 p-1" />
      <div className="text-xl text-white p-1 text-shadow">OUT NOW</div>
      <a className="btnMain" href="https://open.spotify.com/album/7uZezov6ExXtiUAUuiFoFm?si=fmduZqHfR9irAMBjabnSBQ">
        LISTEN ON SPOTIFY
      </a>
      <a href="#live" className="w-2/12 md:w-16 p-2 pt-8">
        <img src={imageURLs.Icons['Down-arrow']} alt="Enter website" />
      </a>
    </div>
  </>
);

Landing.propTypes = {
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

export default Landing;
