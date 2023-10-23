import { observer } from "mobx-react-lite";
import React from "react";
import Books from "./components/Books";
import Search from "./components/Search";
import book from "./store/book";
import InfoOfBook from "./components/InfoOfBook";
import { Route, Routes } from "react-router-dom";
import Preloader from "./Preloader/Preloader";

const Main = observer(() => {
  return (
    <div className="main">
      <Search />

      <div className="container">
        <div className="content">
          {book.total === 0 && book.book.length !== 1 ? (
            ""
          ) : (
            <div className="total-books">Total items {book.total}</div>
          )}

          {book.reload && book.books.length === 0 ? (
            <Preloader />
          ) : (
            <Routes>
              <Route
                path="/"
                element={<Books onClick={() => book.loadMore()} />}
              />
              <Route path={`/infoOfBook`} element={<InfoOfBook />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
});

export default Main;
