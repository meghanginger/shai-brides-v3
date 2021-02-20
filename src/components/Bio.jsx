import React from 'react';
import Img from 'gatsby-image';
import BioText from '../data/bio-text.json';

const Bio = ({ data }) => {
  return (
  <>
    <Img
      fluid={data.bioPhoto.childImageSharp.fluid}
      alt="Shai brides in pink and blue lights"
      className="bioImageMobile"
    />
    <div className="bg-vits-purple flexColCenter text-white text-shadow">
      <div className="container py-4 lg:px-16">
        <h2 className="is-white text-2xl md:text-5xl pt-8 pb-2 md:pb-6 px-2 font-bold font-dramatic">ABOUT THE BAND</h2>
        {BioText.map((para) => (
          <p className="p-2">
            {para.Text}
          </p>
        ))}
        <p className="p-2">
          For booking enquiries, please <a href="mailto:harry@sonicgunconcerts.co.uk">contact Harry Young</a> (management).
        </p>
      </div>
    </div>
  </>
);
}

export default Bio;

/*
import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
//import BioText from '../data/bio-text.json';
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import firebase from 'gatsby-plugin-firebase'; 

const Bio = ({ data }) => {
  const [value, loading, error] = useCollectionOnce(firebase.firestore().collection("bio"));
  if (loading || error) {
    return <h1>LOADING</h1>
  };
  const bioText = value.docs.map(item => item.data())[0].paragraphs;
  console.log(bioText);
  return (
  <>
    <Img
      fluid={data.beachDesktop.childImageSharp.fluid}
      alt="Shai brides under the pier"
      className="bioImageMobile"
    />
    <div className="divShadow">
      <h2 className="joieHeader is-dark-blue-bg is-white">ABOUT THE BAND</h2>
      <div className="bioText is-dark-blue-bg is-white container-fluid">
        {bioText.map((para) => (
          <p className="bioPara">
            {para}
          </p>
        ))}
        <p className="bioPara">
          For booking enquiries, please <a href="mailto:harry@sonicgunconcerts.co.uk">contact Harry Young</a> (management).
        </p>
      </div>
    </div>
  </>
);
}

Bio.propTypes = {
  data: PropTypes.shape({
    beachDesktop: PropTypes.string.isRequired,

  }).isRequired,
}

export default Bio;

*/