import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  // console.log(pageNumbers)

  return (
    <nav>
      <ul className='pagination'>
        <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
        </li>

        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(e) => {
                paginate(number)
                // e.preventDefault();
                }}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
        
        <li className="page-item">
            <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;