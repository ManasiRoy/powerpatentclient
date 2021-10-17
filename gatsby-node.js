const path = require(`path`)
const Post = path.resolve("./src/templates/blogpost.js")
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
  {
    allWpPost {
      nodes {
        excerpt
        id
        uri
        title
        slug
        date(fromNow: true)
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
      totalCount
    }
  }

  `).then(result => {

    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}`,
        component: Post,
        context: {
          slug: node.slug
        },
      })
    })
    createPaginatedPages({
      edges: result.data.allWpPost.nodes,
      createPage: createPage,
      pageTemplate: path.resolve('./src/templates/blog.js'), // check now
      pageLength: 5, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
  })
}

