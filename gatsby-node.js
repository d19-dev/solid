const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPost = path.resolve('./src/templates/blog-post.js')

  // TODO заменить на переменную
  const result = await graphql(`
  {
    allWpPost(
      sort: {fields: date, order: DESC}
      filter: {terms: {nodes: {elemMatch: {slug: {eq: "message"}}}}}
    ) {
      edges {
        node {
          id
          date
          title
          content
          excerpt
          databaseId
          featuredImage {
            node {
              altText
              id
              srcSet
              sourceUrl
              sizes
            }
          }
        }
        next {
          databaseId
          date
        }
        previous {
          databaseId
          date
        }
      }
    }
  }
  `
)
  const posts = result.data.allWpPost.edges

  if (posts.length > 0) {
    posts.forEach((post) => {
      const previous = post.previous
      const next = post.next

      createPage({
        path: post.node.databaseId.toString(),
        component: blogPost,
        context: {
          post: post.node,
          previous,
          next,
        },
      })
    })
  }
}