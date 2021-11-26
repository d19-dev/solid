require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Солид–Лизинг и наши инвесторы`,
    description: `Солид Лизинг для инвесторов, лизинг авто москва, инвесторам, выгодная аренда автомобилей для ИП и машины в лизинг`,
    author: `d19.cvtk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.GRAPHQL_URL ||
          `https://wpgatsbydemo.wpengine.com/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `posts`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#902768`,
        theme_color: `#902768`,
        display: `minimal-ui`,
        icon: `src/images/solid-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
}
