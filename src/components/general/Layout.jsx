import React, { useState } from 'react';
import CookieConsent from "./CookieConsent";
import Menu from '../../data/links/menu-list.json';
import Footer from "../footer";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <head>
        <meta
          meta
          name="viewport"
          content="width=device-width"
        />
      </head>
      <header>
        {showMenu ? (
          <div className="font-dramatic bg-black opacity-90 h-screen w-screen fixed z-10 left-0" id="mainMenu">
            <div className="flexColCenter pt-20">
              <button
                type="button"
                className="fixed top-1 right-1"
                aria-label="Close menu"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <img
                  className="w-11"
                  src={require("../../icons/cross.svg")}
                  alt=""
                />
              </button>
              {Menu.map((header) => (
                <a href={header.link} onClick={() => { setShowMenu(false) }}>
                  <h2 className="font-dramatic text-2xl md:text-7xl text-white text-center p-2 hover:text-cool-blue hover:duration-300">{header.label}</h2>
                </a>
              ))}
              <div className="flex pt-4">
                <a href="https://www.instagram.com/shaibrides" >
                  <img src={require("../../icons/insta.svg")} alt="Instagram" className="socialIcon h-10 md:h-14 "/>
                </a>
                <a href="https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ">
                  <img src={require("../../icons/youtube.svg")} alt="Youtube" className="socialIcon h-10 md:h-14"/>
                </a>
                <a href="https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg" >
                  <img src={require("../../icons/spotify.svg")} alt="Spotify" className="socialIcon h-10 md:h-14"/>
                </a>
                <a href="mailto:harry@sonicgunconcerts.co.uk"  >
                  <img src={require("../../icons/mail.svg")} alt="Email Shai Brides' Manager" className="socialIcon h-10 md:h-14"/>
                </a>
                <a href="https://www.facebook.com/shaibrides" >
                  <img src={require("../../icons/facebook.svg")} alt="Facebook" className="socialIcon h-10 md:h-14"/>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="fixed top-1 right-1 z-10"
            aria-label="Open menu"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <img
              className=""
              src={require("../../icons/burger.svg")}
              alt=""
            />
          </button>
        )}
      </header>
      <body>
        <CookieConsent />
        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
};

export default Layout;
