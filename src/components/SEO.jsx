import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  meta,
  title,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `,
  );
  const metaImage = 'https://ik.imagekit.io/shaibrides/compressed_landing/sunnies-desktop_j_TxIxPxV.jpg';
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet title={title}>
      <html lang="en-GB" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
    </Helmet>
  );
}

SEO.defaultProps = {
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
