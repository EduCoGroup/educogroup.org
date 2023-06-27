/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `EduCo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-google-gtag", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};