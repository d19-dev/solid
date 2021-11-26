import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import * as styles from './index.module.css'
import { Post, Posts } from '../../../@types'
import ArchiveItem from './ArchiveItem'
import MosaicIcon from '../../../svg/mosaic.svg'
import NextIcon from '../../../svg/navigate-next.svg'
import PrevIcon from '../../../svg/navigate-prev.svg'
import ArrowLeftIcon from '../../../svg/arrow-left.svg'
import Input from '../../Common/Input'
import { excerpt } from '../../../lib'

interface Props {
  posts: Posts
  toggle?: () => void
}

const ArchiveBlog: React.FC<Props> = ({
  posts,
  toggle,
}) => {
  const PER_PAGE = 8
  const [search, setSearch] = useState('')
  // TODO Переписать фильтрацию
  const filteredPosts = posts
    .filter((item: Post) => item.title.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
      item.excerpt.trim().toLowerCase().includes(search.trim().toLowerCase()))
  const pageCount = Math.ceil(filteredPosts.length / PER_PAGE)
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + PER_PAGE;
  const currentItems = filteredPosts.slice(itemOffset, endOffset)
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * PER_PAGE) % filteredPosts.length;
    setItemOffset(newOffset);
  };
  const handleOnSearch = (nextValue: string): void => setSearch(nextValue)
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.actions}>
          <div className={styles.back} onClick={toggle}>
            <ArrowLeftIcon />
            <span className={styles.backCaption}>Назад</span>
          </div>
        </div>
        <div className={styles.search}>
          <Input onChange={handleOnSearch} value={search} placeholder='Поиск' />
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.wrapper}>
          {(filteredPosts.length !== 0) ? 
            currentItems.map((post: Post) => (
              <div className={styles.post} key={post.id}>
                <ArchiveItem
                  date={post.date}
                  excerpt={excerpt(post.title)}
                  to={post.databaseId.toString()}
                />
              </div>
              )
            )
            : <p>К сожалению, публикаций не найдено.</p>
          }
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.nav}>
            {filteredPosts.length !== 0 &&
              <ReactPaginate
                disabledClassName={styles.disabled}
                nextLabel={<NextIcon />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel={<PrevIcon />}
                marginPagesDisplayed={1}
                pageClassName={styles.pageItem}
                disableInitialCallback={true}
                nextClassName={styles.nextPage}
                previousClassName={styles.prevPage}
                containerClassName={styles.pagination}
                activeClassName={styles.selected}
                pageLinkClassName={styles.pageLink}
              />
            }
          </div>
      </div>
    </div>
  )
}

export default ArchiveBlog
