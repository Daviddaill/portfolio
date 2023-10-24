import React, { useState } from 'react';
import CSS from './book.module.css';
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import Paper from './Paper';
function Book() {
  const [currentLocation, setCurrentLocation] = useState(1);
  const maxLocation = 6; // Assuming you have 3 pages (modify if needed)
  const [isBookOpen, setIsBookOpen] = useState(false);

  const bookTransform = isBookOpen ? 'translateX(50%)' : 'translateX(0)';
  const prevBtnTransform = isBookOpen ? 'translateX(-180px)' : 'translateX(0)';
  const nextBtnTransform = isBookOpen ? 'translateX(180px)' : 'translateX(0)';

  const openBook = () => {
    setIsBookOpen(true);
  };

  const closeBook = (isAtBeginning) => {
    setIsBookOpen(!isAtBeginning);
  };

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          setCurrentLocation(2);
          break;
        case 2:
          setCurrentLocation(3);
          break;
        case 3:
          setCurrentLocation(4);
          closeBook(false);
          break;
        default:
          throw new Error("Unknown state");
      }
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true);
          setCurrentLocation(1);
          break;
        case 3:
          setCurrentLocation(2);
          break;
        case 4:
          openBook();
          setCurrentLocation(3);
          break;
        default:
          throw new Error("Unknown state");
      }
    }
  };

  return (
    <div className={CSS.book_container}>
        <button className={CSS.button} id="prev-btn" onClick={goPrevPage} style={{ transform: prevBtnTransform }}>
        <FaRegArrowAltCircleLeft  className={CSS.icon}/>
    </button>
    {/* BOOK  */}
    <div id="book" className={CSS.book}>
    <Paper pageNumber={1}/>
    <Paper pageNumber={2}/>
    <Paper pageNumber={3}/>
    </div>
   
    <button className={CSS.button} id="prev-btn" onClick={goNextPage} style={{ transform: nextBtnTransform }}>
        <FaRegArrowAltCircleRight  className={CSS.icon}/>
    </button>

    </div>
   
  );
}

export default Book;
