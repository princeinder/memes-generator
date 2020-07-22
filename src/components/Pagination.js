import React from "react";

const Pagination = ({
  currentPage,
  templatesPerPage,
  totalTemplates,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTemplates / templatesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bottom-links">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
