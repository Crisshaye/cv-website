/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `cv-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // Inside your module.exports in gatsby-config.js
  plugins: [
    `gatsby-plugin-styled-components`, // Add this line
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
  ],
};