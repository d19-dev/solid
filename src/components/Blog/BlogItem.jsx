import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Overlay } from '../Common'
import * as styles from './styles.module.css'
import { Link } from 'gatsby'

const BlogItem = (post) => {
  return (
    <Link to={post.fields.slug} itemProp="url" className={styles.blogItem}>
      <article className="relative flex w-full h-full items-end overflow-hidden" >
        <Overlay>
          <img src={post.frontmatter.featuredImage} alt="" className={styles.scaled} />
          {/* <StaticImage
            imgStyle={{
              objectFit: "cover",
              objectPosition: "center center"
            }}
            layout="fixed"
            alt="hey"
            src="../../images/tmp.jpg"
            placeholder="blurred"
            className={styles.scaled}
          /> */}
        </Overlay>
        <Overlay>
          <div className="h-full" style={{background: "linear-gradient(180deg, rgba(83, 53, 119, 0.32) 0%, rgba(24, 14, 49, 0.75) 47.33%, #180E31 100%)"}}></div>
        </Overlay>
        <div className="py-4 px-5 text-white">
          <h5 className="text-lg leading-snug mb-2">{post.frontmatter.title}</h5>
          <p className="leading-snug font-light max-h-16 overflow-hidden">{post.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}

export default BlogItem