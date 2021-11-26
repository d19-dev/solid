import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Post, Posts } from '../../../../@types';

interface Props {
  posts: Posts,
  perPage: number
}

const PaginatedItems: React.FC<Props> = ({
  posts,
  perPage,
}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + perPage
  setCurrentItems(posts.slice(itemOffset, endOffset))
  setPageCount(Math.ceil(posts.length / perPage))

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * perPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        marginPagesDisplayed={2}
      />
    </>
  );
}