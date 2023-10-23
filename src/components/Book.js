import React from "react";
import { Link } from "react-router-dom";
import book from "../store/book";

function Book({ bookInfo }) {
  const thumbnail =
    bookInfo.volumeInfo.imageLinks &&
    bookInfo.volumeInfo.imageLinks.smallThumbnail;

  const categories = bookInfo.volumeInfo.categories;

  const name = bookInfo.volumeInfo.title;

  const author = bookInfo.volumeInfo.authors  ? bookInfo.volumeInfo.authors[0] : bookInfo.volumeInfo.authors ;

  if (thumbnail !== undefined) {
    return (
      <div className="book">
        <Link to={`/infoOfBook`} onClick={ () => book.setBook(bookInfo)}>
          <div className="book-img">
            <img src={thumbnail} className="img" alt="Book img"></img>
          </div>
          <div className="book-category">{categories}</div>
          <div className="book-name">{name}</div>
          <div className="book-authors">{author}</div>
        </Link>
      </div>
    );
  }
}

export default Book;
