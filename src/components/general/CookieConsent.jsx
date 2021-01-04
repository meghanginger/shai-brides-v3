import React from 'react';
import CookieConsentPkg from 'react-cookie-consent';

const CookieConsent = () => (
  <CookieConsentPkg
    location="bottom"
    buttonText="Accept cookies"
    acceptOnScroll
    cookieName="ShaiBridesConsentCookie"
    style={{ background: 'rgba(0, 0, 0, 0.75)' }}
    buttonStyle={{
      color: 'white',
      fontSize: '1rem',
      background: 'rgb(16, 97, 100, 0.9)',
      fontFamily: 'Jura',
      padding: 10,
      opacity: 1,
      'text-shadow': '2px 2px 2px #111111',
      border: '0.2rem solid white',
      'border-radius': 2,
      'min-width': '12rem',
    }}
  >
    <h4 className="margin-0">
      This website uses cookies to enhance the user experience. Sorry, it's just how the web works now.
    </h4>
  </CookieConsentPkg>
);

export default CookieConsent;