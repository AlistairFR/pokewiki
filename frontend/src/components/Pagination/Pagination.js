import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ count, handlePageClick, ITEMS_PER_PAGE}) {
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
  return (
    <ReactPaginate
    className="pagination justify-content-center my-4 gap-4"
    previousClassName="btn btn-primary fs-5 prev"
    nextClassName="btn btn-primary fs-5 next"
    activeClassName="active"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousLabel="Précédent"
    nextLabel="Suivant"
    breakLabel="..."
    pageCount={Math.ceil(count / ITEMS_PER_PAGE)}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName={"pagination"}
    subContainerClassName={"pages pagination"}
  />
  )
}

export default Pagination