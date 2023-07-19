// import React from "react";

// const Pagination = (props) => {
//   const { postsPerPage, totalPosts, paginate, currentPage } = props;
//   let pages = [];
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pages.push(i);
//   }
//   return (
//     <div className="my-5 flex items-center justify-center">
//       {pages.map((page, index) => (
//         <button
//           key={index}
//           onClick={() => paginate(page)}
//           className={`w-8 h-8 md:w-10 md:h-10 text-center mr-2 rounded-full text-white hover:bg-[#00ac8a]/30 ${
//             page === currentPage ? "bg-[#00ac8a]/30" : "bg-gray-800/30"
//           }`}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Pagination;

import React, { useState, useEffect } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { FaEllipsisH } from "react-icons/fa";

function Pagination({ pages = 10, setCurrentPage }) {
  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];
    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        className={`text-2xl p-1 md:p-2 rounded-full bg-gray-800/30 hover:bg-[#00ac8a]/30 ${
          currentButton === 1 ? "hover:bg-gray-800/30 cursor-not-allowed" : ""
        }`}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        <TiArrowLeft />
      </button>

      {arrOfCurrButtons.map((page, index) => {
        return (
          <button
            key={index}
            className={`w-8 h-8 md:w-10 md:h-10 text-center mr-2 rounded-full text-white hover:bg-[#00ac8a]/30 ${
              page === currentButton ? "bg-[#00ac8a]/30" : "bg-gray-800/30"
            }`}
            onClick={() => setCurrentButton(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className={`text-2xl p-1 md:p-2 rounded-full bg-gray-800/30 hover:bg-[#00ac8a]/30 ${
          currentButton === numberOfPages.length
            ? "hover:bg-gray-800/30 cursor-not-allowed"
            : ""
        }`}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      >
        <TiArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
