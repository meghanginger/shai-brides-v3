module.exports = {
  siteMetadata: {
      title: `B29 TOUR`,
      description: `February 2021`,
      author: `@b29music`,
      image: `/images/bg-min.jpg`
    },
  plugins: [
      {
          resolve: `gatsby-plugin-sass`,
          options: { 
              postCssPlugins: [require("tailwindcss")()],
          },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      { resolve: `gatsby-source-filesystem`, options: { path: `./src/images/` } },
  ],
}