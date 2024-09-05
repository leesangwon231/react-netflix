import React from 'react';
import ReactPaginate from 'react-paginate';
import "./PageNation.css"

const PageNation = ({data,setPage,page}) => {
    const onChagePages = ({selected}) => {
        setPage(selected+1)
    }

    return (
        <div className={"pageArea"}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={onChagePages}
                pageRangeDisplayed={2}
                pageCount={data?.total_pages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                forcePage={page - 1}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                disabledClassName={"disabled"}
            />
        </div>

    );
}

export default PageNation;