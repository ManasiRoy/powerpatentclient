import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          title
        }
      }
      menu: wpMenu(name: {eq: "MainMenu"}) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                url
                label
                id
                path
              }
            }
          }
        }
      }
    }
  `)
  return data;
}

