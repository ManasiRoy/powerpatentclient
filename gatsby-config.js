module.exports = {
  siteMetadata: {
    title: `Powerpatient`,
    description: `Lawyer Website`,
    author: `Bao Tran`,
    siteUrl: `https://powerpatent.gatsbyjs.io/`,
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
        url: `https://www.powerpatent.com/graphql`,
        protocol: `http`,
        useACF: true,
        verboseOutput: true,
        includedRoutes: [
          '**/*/*/products',
          '**/*/*/partners',
          '**/*/*/resources',
          '**/*/*/about',
          '**/*/*/blog',
        ],
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
        url: "https://www.powerpatent.com/graphql",
        // GraphQL endpoint using env variable
        // url: "${process.env.WORDPRESS_URL}/graphql",
      },
    },
    `gatsby-plugin-sass`
  ],
}
