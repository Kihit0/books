import { toJS } from "mobx";
import React from "react";
import Preloader from "../Preloader/Preloader";
import book from "../store/book";
import Book from "./Book";

const Books = ({ onClick }) => {
  const books = toJS(book.books);
  const btnBook =
    book.books.length > 0 && !book.reload ? (
      <button className="load-more" onClick={() => onClick()}>
        Load more
      </button>
    ) : (
      <Preloader />
    );
  return (
    <div className="books">
      {books.map((b, index) => {
        return <Book key={index} bookInfo={b} />;
      })}

      <div className="center">
        {book.books.length === 0 ? "" : btnBook}
      </div>
    </div>
  );
};

export default Books;
