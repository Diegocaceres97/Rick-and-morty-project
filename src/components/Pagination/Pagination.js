import React, { useState, useEffect} from "react";
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let[width, setWidth] = useState(window.innerWidth);
  let updateDimentions = () => {
    setWidth(window.innerWidth);
   }
  useEffect(() => {
    window.addEventListener("resize", updateDimentions);
    return () => window.removeEventListener("resize", updateDimentions);
  },[])

  return  (
  <>
  <style jsx>

    {
      `
        @media(max-width:768px){
          .next, .prev{
            display:none;
          }
          .pagination {
            font-size: 14px; 
          }
        }
      `
    }

  </style>
  <ReactPaginate 
  className="pagination justify-content-center gap-4 my-4"
 
  nextLabel ="Next"
  previousLabel ="Previous"
  nextClassName= "btn bg-ligth next"
  previousClassName ="btn bg-ligth prev"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"
  marginPagesDisplayed={width < 576 ? 1 : 2}
  onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
  pageCount={info?.pages}/>
  </>
  )
};

export default Pagination;
