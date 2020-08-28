require("dotenv").config({
  path: `.env`,
})

const { default: config } = require("gatsby-plugin-config")

module.exports = {
  siteMetadata: {
    title: "Fit kids",
    description: "Fit kids - catering dietetyczny dla dzieci",
    url: "https://www.fit-kids.pl",
    image: "./src/images/logo-kidsfit.png",
    siteUrl: "https://fit-kids.pl",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
        path: `${__dirname}/src/images/slider`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ourValues`,
        path: `${__dirname}/src/images/ourValues`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutUs`,
        path: `${__dirname}/src/images/aboutUs`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: config.DATO_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Saira Semi Condensed:900,600,400", "Acme"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Saira Semi Condensed",
              variants: ["400", "600", "900"],
              subsets: ["latin"],
              text: "Hello",
              fontDisplay: "swap",
            },
            {
              family: "Acme",
              variants: ["400", "600", "900"],
              subsets: ["latin"],
              text: "Hello",
              fontDisplay: "swap",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
}
