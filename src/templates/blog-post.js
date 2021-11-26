import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './assets/styles.module.css'
import { Overlay } from '../components/Common'
import Footer from '../components/Footer'
import moment from 'moment'
import 'moment/locale/ru'

const BlogPostTemplate = ({pageContext}) => {
  const { post, previous, next } = pageContext
  let prevDate, nextDate
  if (previous) {
    prevDate = moment(previous.date).format('D MMMM, Y')
  }
  if (next) {
    nextDate = moment(next.date).format('D MMMM, Y')
  }
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
            <Link to={`/${next.databaseId}`} rel="next">
              ← {nextDate}
            </Link>
          )}
          <Link to={"/#news"} rel="news">На главную</Link>
          {previous && (
            <Link to={`/${previous.databaseId}`} rel="prev">
              {prevDate} →
            </Link>
          )}
        </div>
      </div>
      <div className="container py-12 flex flex-col md:flex-row lg:px-0 lg:py-24 h-full mx-auto ">
        <div className="px-2">
          <div className="relative overflow-hidden">
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.excerpt}
              className="max-w-sm shadow-md"
            />
            <div className="absolute w-full h-full top-0 left-0" style={{background: "linear-gradient(rgba(83, 53, 119, 0.32) 0%, rgba(24, 14, 49, 0.75) 47.33%, rgb(24, 14, 49) 100%)"}}></div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 px-2">
          {/* <GatsbyImage image={featuredImg} alt="sd" /> */}
          <h1 itemProp="headline" className="text-xl font-bold text-deep-purple">{post.title}</h1>
          <section
            className={styles.section}
            dangerouslySetInnerHTML={{ __html: post.content }}
            itemProp="articleBody"
          />
        </div>
      </div>
      <Footer />
    </article>
  )
}

export default BlogPostTemplate

// export const pageQuery = graphql`
// {
//   allWpPost(sort: {fields: date, order: DESC}) {
//     nodes {
//       id
//       title
//       excerpt
//       databaseId
//       date
//       content
//       featuredImage {
//         node {
//           id
//           altText
//           srcSet
//           sizes
//           sourceUrl
//         }
//       }
//     }
//   }
// }
// `