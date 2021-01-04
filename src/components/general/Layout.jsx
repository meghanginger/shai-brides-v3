import React, { useState } from 'react';
import CookieConsent from "./CookieConsent";
import Menu from '../../data/links/menu-list.json';

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
          <div className="menuDiv" id="mainMenu">
            <div className="menuDivSecond">
              <button
                type="button"
                className="xButton"
                aria-label="Close menu"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <img
                  className="xMenu"
                  src={require("../../icons/cross.svg")}
                  alt=""
                />
              </button>
              {Menu.map((header) => (
                <a href={header.link} onClick={() => { setShowMenu(false) }}>
                  <h2>{header.label}</h2>
                </a>
              ))}
              <div className="menuIconDiv">
                <a href="https://www.instagram.com/shaibrides" >
                  <img src={require("../../icons/insta.svg")} alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ">
                  <img src={require("../../icons/youtube.svg")} alt="Youtube" />
                </a>
                <a href="https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg" >
                  <img src={require("../../icons/spotify.svg")} alt="Spotify" />
                </a>
                <a href="mailto:harry@sonicgunconcerts.co.uk"  >
                  <img src={require("../../icons/mail.svg")} alt="Email Shai Brides' Manager" />
                </a>
                <a href="https://www.facebook.com/shaibrides" >
                  <img src={require("../../icons/facebook.svg")} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="menuButton"
            aria-label="Open menu"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <img
              className="burgerMenu"
              src={require("../../icons/burger.svg")}
              alt=""
            />
          </button>
        )}
      </header>
      <body>
        <CookieConsent />
        <main>{children}</main>
      </body>
    </>
  );
};

export default Layout;
