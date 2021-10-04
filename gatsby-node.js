const path = require(`path`)
const Post = path.resolve("./src/templates/blogpost.js")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost { 
        nodes {
          slug
        }
      }
    }

  `).then(result => {
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `/Blog/${node.slug}`,
        component: Post,
        context: {
          slug: node.slug
        },
      })
    })
  })
}