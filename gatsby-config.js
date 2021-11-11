require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Powerpatient`,
    description: `Lawyer Website`,
    author: `Bao Tran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Source Sans Pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WORDPRESS_URL,
        // protocol: `http`,
        // useACF: true,
        // verboseOutput: true,
        production: {
          allow404Images: true
        },
        html: {
          createStaticFiles: false,
        },
        // includedRoutes: [
        //   '**/*/*/products',
        //   '**/*/*/partners',
        //   '**/*/*/resources',
        //   '**/*/*/about',
        //   '**/*/*/blog',
        // ],
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        // GraphQL endpoint, relative to your WordPress home URL.
        //url: "https://wp.powerpatent.com/graphql",
        // GraphQL endpoint using env variable
        url: process.env.WORDPRESS_URL,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
