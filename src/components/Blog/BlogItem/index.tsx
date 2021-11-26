import React from 'react'
import clsx from 'clsx'
import moment from 'moment'
import 'moment/locale/ru'
import { Link } from 'gatsby'
import * as styles from './index.module.css'
import { Overlay } from '../../Common'
import { FeaturedImage } from '../../../@types'
import placeholderImage from './placeholder-image'

moment.locale('ru')

interface Props {
  size?: 'large' | 'small'
  date: string | Date
  excerpt: string
  image: FeaturedImage | null
  to: string
} 

const BlogItem: React.FC<Props> = ({
  size = 'large',
  date,
  excerpt,
  image,
  to,
}) => {
  const [day, month] = moment(date).format('D MMMM').split(' ')
  let featuredImage: FeaturedImage = image
  if (featuredImage === null) {
    featuredImage = placeholderImage
  }
  return (
    <div className={clsx(styles.root, size === 'small' && styles._small)}>
      <Link {...{ to }} itemProp="url" className={styles.wrapper}>
        <article className={styles.article}>
          <Overlay>
            <img
              src={featuredImage.node.sourceUrl}
              srcSet={featuredImage.node.srcSet}
              alt={featuredImage.node.altText || excerpt}
              className={styles.image}
            />
          </Overlay>
          <Overlay>
            <div className={styles.overlay} />
          </Overlay>
          <div className={styles.meta}>
            <h5 className={styles.date}>
              <span className={styles.day}>{day}</span>
              <span className={styles.month}>{month}</span>
            </h5>
            <p className={styles.excerpt}>{excerpt}</p>
          </div>
        </article>
      </Link>
    </div>
  )

}

export default BlogItem