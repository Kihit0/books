import { makeAutoObservable } from "mobx";

class Book {
  reload = false;
  books = [];
  book = [];
  select = "";
  category = "all";
  sort = "relevance";
  index = 0;
  total = 0;
  key = "AIzaSyAhbLYbTi0Z6kzNrdCcwZYN302f1k4DIzM";
  url = `https://www.googleapis.com/books/v1/volumes?q=`;

  constructor() {
    makeAutoObservable(this);
  }

  setTotal(total) {
    this.total = total;
  }

  setBook(book) {
    if (this.book.length > 0) {
      this.book = [];
    }
    this.book = [book];
  }

  setBooks(books) {
    this.books = [...this.books, ...books];
  }

  setSearch(select) {
    this.select = select;
  }

  setGategory(catagory) {
    console.log(this.category);
    this.category = catagory.toLowerCase();
  }

  setSort(sort) {
    console.log(this.sort);
    this.sort = sort;
  }

  loadMore() {
    if (this.books.length !== 0) {
      this.index = this.index + 30;
      this.fethBooks();
    }
  }

  selectBooks() {
    if (this.select !== "") {
      this.books = [];
      this.fethBooks();
    }
  }

  fethBooks() {
    this.reload = true;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.select !== "" ? this.select + "&" : ""
      }orderBy=${this.sort + "&"}subject:${this.category}&startIndex=${
        this.index
      }&maxResults=30&key=${this.key}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setTotal(json.totalItems);
        this.setBooks(json.items);
        this.reload = false;
      })
      .catch((err) => console.log(err.message));
  }
}

export default new Book();
