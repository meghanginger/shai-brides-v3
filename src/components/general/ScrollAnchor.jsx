import React from 'react';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor';

const ScrollAnchor = ({ linkId }) => (
  <ScrollableAnchor id={linkId}>
    <div className="emptyDiv" />
  </ScrollableAnchor>
);

ScrollAnchor.propTypes = {
  linkId: PropTypes.string.isRequired,
};

export default ScrollAnchor;
