require("dotenv").config({
  path: `.env`,
})

const { default: config } = require("gatsby-plugin-config")

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slider`,
        path: `${__dirname}/src/slider`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: config.DATO_API_TOKEN,
        previewMode: false,
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
