import { toJS } from "mobx";
import React from "react";
import book from "../store/book";

function InfoOfBook() {
  const bookInfo = toJS(book.book);
  const thumbnail =
    bookInfo[0].volumeInfo.imageLinks &&
    bookInfo[0].volumeInfo.imageLinks.smallThumbnail;

  const categories = bookInfo[0].volumeInfo.categories;

  const name = bookInfo[0].volumeInfo.title;

  const author = bookInfo[0].volumeInfo.authors  ? bookInfo[0].volumeInfo.authors[0] : bookInfo[0].volumeInfo.authors;
  return (
    <div className="info-book">
      <div className="info-img">
        <img src={thumbnail} alt="Book img" className="img"></img>
      </div>
      <div className="info-book-main">
        <div className="info-book-category">{categories}</div>
        <div className="info-book-name">{name}</div>
        <div className="info-book-authors">{author}</div>
      </div>
    </div>
  );
}

export default InfoOfBook;
