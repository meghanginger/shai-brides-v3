import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import imageURLs from '../data/content-cdn';

const Footer = () => (
  <div className="bg-dark-blue text-white flexColCenter p-2">
    <div className="flexColCenter md:flex-row md:justify-center py-2 md:items-end ">
      <Link to="/" className="w-7/12 md:w-3/12 fit-content flexColCenter mb-2 md:m-0">
        <img src={imageURLs.Logos.white} alt="Jump to start of website" />
      </Link>
      <div className="flex -mb-1">
        <a href="https://www.instagram.com/shaibrides">
          <img src={require("../icons/insta.svg")} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ">
          <img src={require("../icons/youtube.svg")} alt="Youtube" />
        </a>
        <a href="https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg">
          <img src={require("../icons/spotify.svg")} alt="Spotify" />
        </a>
        <a href="mailto:shaibrides@gmail.com">
          <img src={require("../icons/mail.svg")} alt="Email" />
        </a>
        <a href="https://www.facebook.com/shaibrides">
          <img src={require("../icons/facebook.svg")} alt="Facebook" />
        </a>
      </div>
    </div>
    <span className="text-center text-xs">
      © Shai Brides 2020. All photos taken by Tom Baines and <a href="https://sld.codes">Sam Larsen Disney</a>.
    </span>
  </div>

);

export default Footer;
