/* eslint-disable no-unused-vars */
class LibraryApp {
  constructor() {
    this.addBookButton = document.querySelector("#add-book");
    this.bookList = document.querySelector(".book-list");
    this.libBooks = JSON.parse(localStorage.getItem("libraryBooks")) || [];

    this.libBooks.forEach((book) => this.displayBook(book));
  }

  updateLocalStorage() {
    localStorage.setItem("libraryBooks", JSON.stringify(this.libBooks));
  }

  handleAddBook(e) {
    e.preventDefault();

    const bookTitle = document.querySelector("#book-title").value;
    const authorName = document.querySelector("#author-name").value;
    const message = document.querySelector(".message");

    if (bookTitle === "" || authorName === "") {
      message.innerText = "Please input Title and Author";
      return;
    }

    const book = { book: bookTitle, author: authorName };
    this.libBooks.push(book);
    this.updateLocalStorage();
    this.displayBook(book);

    document.querySelector("#book-title").value = "";
    document.querySelector("#author-name").value = "";
  }

  displayBook(book) {
    const div = document.createElement("div");
    const bookItem = document.createElement("p");
    bookItem.innerHTML = `${book.book}<br>   by  <br> ${book.author}`;

    const divider = document.createElement("hr");

    const removeBook = document.createElement("button");
    removeBook.innerText = "Remove";
    removeBook.style.display = "block";

    removeBook.addEventListener("click", () => {
      const index = this.libBooks.indexOf(book);
      if (index !== -1) {
        this.libBooks.splice(index, 1);
        this.updateLocalStorage();
      }
      bookItem.remove();
    });

    bookItem.append(removeBook, divider);
    div.append(bookItem);
    this.bookList.append(div);
  }
}

const libraryApp = new LibraryApp();
const button = document.querySelector("#add-book");
button.addEventListener("click", (e) => {
  libraryApp.handleAddBook(e);
});
