/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require("tailwindcss")],
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -20,
        duration: 500,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
