import React from 'react';
import SEO from "../components/SEO";
import Img from 'gatsby-image';
import imageURLs from '../data/content-cdn';
import links from "../data/links/enterWebsiteLinks";

const index = ({ data }) => (
  <>
    <SEO title="VITAMINS OUT NOW | SHAI BRIDES" />
    <div className="flexColCenter mainBg">
      <img src={imageURLs.Logos.black} className="svgDarkBlue md:self-start w-64 transform -translate-y-8 justify-self-start" alt="Shai Brides" />
      <div className="flexColCenter justify-center">
        <img src={imageURLs.Vits.logo} className="m-8 svgDarkBlue w-11/12 md:w-2/4" alt="Vitamins" />
        <div className="vitsText honeydew-dark-blue alignCenter text-3xl text-dark-blue italic pb-4">OUT NOW</div>
        {
          links.map(link => (
            <a className="btnMain uppercase w-5/6 md:w-2/6" href="link.link">
          {link.label}
        </a>
          ))
        }
      </div>
      <img src="https://ik.imagekit.io/shaibrides/vits-line_ILA3O9bcf.svg" className="absolute bottom-0 my-4 w-10/12 md:w-2/6 svgDarkBlue" />
    </div>
  </>
)

export default index;