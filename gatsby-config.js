/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})

const { default: config } = require("gatsby-plugin-config")

console.log(__dirname)

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: config.DATO_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Saira Semi Condensed:900,800,700,600,500,400,300,200,100",
            "Acme",
          ],
        },
      },
    },
  ],
}
