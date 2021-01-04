import React from "react";
import { Link } from "gatsby";
//import SEO from "../components/seo";
//import Footer from "../components/footer";

const lost = () => (
  <div className="mainBg w-screen h-screen">
    <div className="">
      <h1 className="">You look lost - there's no page here...</h1>
      <img src="https://ik.imagekit.io/shaibrides/CAM_404_min_hKl-PKbnP.gif" alt="drummer being an idiot" className="errorGif"/>
      <h5 className="">
        Are you snooping for a mystery page? Cam's a bit lost too.
      </h5>
      <Link className="homeLink">
        <button className="btn margin-3-t">Take me home</button>
      </Link>
    </div>
  </div>
);

export default lost;