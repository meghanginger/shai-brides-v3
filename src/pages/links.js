import React from 'react';
import SEO from "../components/SEO";
import links from "../data/links/instaLinks";
import content from "../data/content-cdn";
import icons from "../data/links/socials-list";

const linksPage = ({ data }) => (
  <>
    <SEO title="LINKS | SHAI BRIDES" />
    <div className="mainBg flex flex-col items-center pt-4">
      <div className="flex flex-col items-center">
        <a href="/home" className="flexColCenter">
          <img className="w-3/5 md:w-4/12 h-auto m-4 svgDarkBlue"src={content.Logos.white} alt="" />
        </a>
        <div className="flex mb-8">
          {icons.map(icon => (
            <a href={icon.href} label={icon.label}>
              <img src={icon.location} alt="" className="socialIcon svgDarkBlue" />
            </a>
          ))}
        </div>
        {links.map(link => (
          <a className="btnMain w-11/12 md:w-2/6" href={link.Link}>
            {link.Text}
          </a>
        ))}
      </div>
      <img src="https://ik.imagekit.io/shaibrides/vits-line_ILA3O9bcf.svg" className="w-11/12 m-4 md:m-8 md:w-4/12 svgDarkBlue" />
    </div>
  </>
  );

export default linksPage;