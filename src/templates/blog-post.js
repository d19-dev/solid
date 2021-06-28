import * as React from "react"
import { Link, graphql, navigate } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import * as styles from './assets/styles.module.css'
import { Overlay } from '../components/Common'
import Footer from '../components/Footer'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const featuredImg = getImage(post.frontmatter.featuredImage.childImageSharp)
  const { previous, next } = data
  return (
    <article
      className="relative md:min-h-screen flex flex-col justify-between"
      itemScope
      itemType="http://schema.org/Article"
    >
      <Overlay>
        <StaticImage
          imgStyle={{
            objectFit: "contain",
            objectPosition: "right bottom",
          }}
          quality={90}
          layout="fullWidth"
          alt="hey"
          src="../images/blog-bg.jpg"
          placeholder="blurred"
        />
      </Overlay>
      <div className="h-12 bg-deep-purple">
        <div className="container px-2 flex lg:flex-row h-full mx-auto font-poiret text-white text-sm md:text-xl items-center justify-between">
          {next && (
            <Link to={next.fields.slug} rel="next">
              ← {next.frontmatter.title}
            </Link>
          )}
          <Link to={"/#news"} rel="news">На главную</Link>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              {previous.frontmatter.title} →
            </Link>
          )}
        </div>
      </div>
      <div className="container py-12 flex flex-col md:flex-row lg:px-0 lg:py-24 h-full mx-auto ">
        <div className="px-2">
          <div className="relative overflow-hidden">
            <img src={post.frontmatter.featuredImage} alt="" className="max-w-sm shadow-md" />
            <div className="absolute w-full h-full top-0 left-0" style={{background: "linear-gradient(rgba(83, 53, 119, 0.32) 0%, rgba(24, 14, 49, 0.75) 47.33%, rgb(24, 14, 49) 100%)"}}></div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 px-2">
          {/* <GatsbyImage image={featuredImg} alt="sd" /> */}
          <h1 itemProp="headline" className="text-xl font-bold text-deep-purple">{post.frontmatter.title}</h1>
          <section
            className={styles.section}
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </div>
      <Footer />
    </article>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        featuredImage
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`