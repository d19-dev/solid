import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './styles.module.css'
import { Devider, Overlay } from "../../components/Common"
import BlogItem from './BlogItem'
// import Calendar from './Calendar'
import ArchiveButton from './ArchiveButton'
import { Post } from '../../@types'
import ArchiveBlog from './ArchiveBlog'
import clsx from 'clsx'
import { filterByTerm } from '../../lib'
import Calendar from './Calendar'

interface Props {
  posts: Array<Post> | []
}

const Blog: React.FC<Props> = ({
  posts
}) => {
  const POSTS_TERM = process.env.POSTS_SLUG || 'message'
  const EVENTS_TERM = process.env.CALENDAR_EVENTS_SLUG || 'calendar-event'
  const messages = filterByTerm(posts, POSTS_TERM)
  const events = filterByTerm(posts, EVENTS_TERM)
  const [archiveShowed, toggleArchive] = useState(false)
  const handleToggleArchive = () => toggleArchive(!archiveShowed)
  const getSizeByTemplate = (index: number): 'small' | 'large' => {
    const smallItems = [2, 4, 5, 6]
    if (smallItems.includes(index)) {
      return 'small'
    } else {
      return 'large'
    }
  }
  return (
    <section id="news" className="relative lg:h-screen lg:flex lg:items-center lg:min-h-270">
      <Overlay>
        <StaticImage
          imgStyle={{
            objectFit: "cover",
            objectPosition: "right bottom",
          }}
          layout="fullWidth"
          alt="news background"
          src="../../images/blog-bg.jpg"
          placeholder="blurred"
          className="hidden lg:block h-full"
        />
      </Overlay>
      <div className={styles.blog}>
        <h3 className={styles.heading}>Новости инвестора</h3>
        <div className={clsx(styles.wrapper, archiveShowed && styles.switched)}>
          <div className={styles.items}>
            {messages.slice(0, 8).map((post, index) => (
              <div className={styles.item} key={post.id}>
                <BlogItem
                  size={getSizeByTemplate(index)}
                  date={post.date}
                  excerpt={post.title}
                  image={post.featuredImage}
                  to={post.databaseId.toString()}
                />
              </div>
              )
            )}
            <div className={styles.archive}>
              <ArchiveButton onClick={handleToggleArchive} toggled={archiveShowed}>
                {archiveShowed? 'Назад': 'Все новости'}
              </ArchiveButton>
            </div>
            <div className={styles.calendar}>
              <h3 className={styles.calendarHeading}>Ближайшие события</h3>
              <Calendar events={events} />
            </div>
          </div>
          <ArchiveBlog posts={messages} toggle={handleToggleArchive}/>
        </div>
      </div>
    </section>
  )
}

export default Blog
