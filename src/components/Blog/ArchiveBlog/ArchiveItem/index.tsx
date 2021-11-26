import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import DateIcon from '../../assets/event.svg'
import * as styles from './index.module.css'
import { Link } from 'gatsby'

interface Props {
  date: string | Date
  excerpt: string
  to: string
}

const  ArchiveItem: React.FC<Props> = ({
  date,
  excerpt,
  to,
}) => {
  const postDate = moment(date).format('D MMMM')
  return (
    <Link {...{to}} className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <DateIcon />
        </div>
        <div className={styles.date}>{postDate}</div>
        <div className={styles.excerpt}>{excerpt}</div>
      </div>
    </Link>
  )
}

export default ArchiveItem
