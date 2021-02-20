import React from 'react';
import Img from 'gatsby-image';
import merchItems from '../data/merch.json';

const Merch = ({ data }) => (
  <>
    <Img
      fluid={data.merchPhoto.childImageSharp.fluid}
      alt="Shai brides in pink and blue lights"
    />
    <div className="bg-vits-pink flexColCenter text-white text-shadow pb-4">
      <div className="container lg:px-16 -mt-2">
        <h2 className="is-white text-2xl md:text-5xl pt-8 pb-2 md:pb-6 px-2 font-bold font-dramatic">MERCH</h2>
        <div className="flex p-2 flex-col md:flex-row">
          <div className="md:m-4 my-4 w-full md:w-6/12">
            <div className="flex">
              <Img
                fluid={data.frontShirtEcru.childImageSharp.fluid}
                alt="Shai brides in pink and blue lights"
                className="w-6/12 md:p-4"
              />
              <Img
                fluid={data.backShirtEcru.childImageSharp.fluid}
                alt="Shai brides in pink and blue lights"
                className="w-6/12 md:p-4"
              />
            </div>
            <h4 className="font-bold mt-2">Ecru VitaminsT-shirt</h4>
            <h5>£15 + £4 postage</h5>
          </div>
          <div className="md:m-4 my-4 w-full md:w-6/12">
            <div className="flex ">
              <Img
                fluid={data.frontShirtBlue.childImageSharp.fluid}
                alt="Shai brides in pink and blue lights"
                className="w-6/12 md:p-4"
              />
              <Img
                fluid={data.backShirtBlue.childImageSharp.fluid}
                alt="Shai brides in pink and blue lights"
                className="w-6/12 md:p-4"
              />
            </div>
            <h4 className="font-bold mt-2">Blue Vitamins T-shirt</h4>
            <h5>£15 + £4 postage</h5>
        </div>
        </div>
        <p className="px-2">
        Simply pay us using our <a href="https://shaibrides.co.uk" className="font-bold">Paypal address</a>. Then send us an Instagram message with your colour, size and address and we'll get it shipped to you!
        </p>
      </div>
    </div>
  </>
  
);

export default Merch;

/*
 { merchItems.map((item) => (
            <div className="md:p-8 w-full md:w-6/12 flex">
              {item.itemPhotos.map((photo) => (
                <Img
                fluid={`data.${photo.imgLink}.childImageSharp.fluid`}
                alt={photo.alt}
                className="w-6/12 md:p-4 h-auto"
              />
              ))}
            </div>   
          ))}
          <div>

*/