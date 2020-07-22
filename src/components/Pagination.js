import React from "react";

const Pagination = ({
  currentPage,
  templatesPerPage,
  totalTemplates,
  paginate,
}) => {
  const pageNumbers = [];
  console.log(currentPage);
  for (let i = 1; i <= Math.ceil(totalTemplates / templatesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bottom-links">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage == number ? "page-item active" : "page-item"}
          >
            <a
              onClick={() => paginate(number)}
              href="javascript:void(0);"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
