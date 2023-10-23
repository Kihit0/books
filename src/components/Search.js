import React, { useState } from "react";
import book from "../store/book";

function Search() {
  const filter = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];
  const category = ["relevance", "newest"];

  const [search, setSearch] = useState("");
  

  const searchBook = (event) =>{
    console.log(event.type)
    
    if(event.key === "Enter" || event.type === "click"){
      book.setSearch(search);
      book.selectBooks();
    }
  }

  return (
    <div className="search">
      <div className="container">
        <h2>Search for books</h2>
        <div className="search-books">
          <input
          className="input-search"
            type="text"
            placeholder="search for books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
          <button className="btn" onClick={searchBook}>
            <svg className="svg">
              <use xlinkHref="#search"></use>
            </svg>
          </button>
        </div>

        <div className="search-filter">
          Categories
          <select
            className="select filter"
            name="filter"
            onChange={(e) => book.setGategory(e.target.value)}
          >
            {filter.map((filterName, filterIndex) => {
              return (
                <option
                  className="option option-filter"
                  key={filterIndex}
                  value={filterName}
                >
                  {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
                </option>
              );
            })}
          </select>
          Sort By
          <select
            className="select category"
            name="category"
            onChange={(e) => book.setSort(e.target.value)}
          >
            {category.map((categoryName, categoryIndex) => {
              return (
                <option
                  className="option option-category"
                  key={categoryIndex}
                  value={categoryName}
                >
                  {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
