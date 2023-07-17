require('dotenv').config();
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `EduCo`,
    siteUrl: `https://educogroup.org`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: `${process.env.REACT_APP_GA_TAG}`, 
        gtagConfig: {
          measurementID: `${process.env.REACT_APP_MEASUREMENT_ID}`,
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ]
};