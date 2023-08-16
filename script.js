class AwesomeBooks {
  constructor() {
    this.libBooks = JSON.parse(localStorage.getItem("libraryBooks")) || [];
    window.addEventListener("load", () => {
      this.displayBooks();
    });
  }

  updateLocalStorage() {
    localStorage.setItem("libraryBooks", JSON.stringify(this.libBooks));
  }

  addBook(e) {
    e.preventDefault();
    const bookTitle = document.querySelector("#book-title").value;
    const authorName = document.querySelector("#author-name").value;
    const message = document.querySelector(".message");
    const bookList = document.querySelector(".book-list");
    console.log(bookList);

    if (bookList === "" || authorName === "") {
      message.innerText = "Please input Title and Author1";
      return;
    }

    // check if bookTitle and authorName are present
    if (bookTitle && authorName) {
      // create an object of the book and author
      const book = { book: bookTitle, author: authorName };
      this.libBooks.push(book);
      this.updateLocalStorage();

      const bookItem = document.createElement("p");
      bookItem.innerHTML = `${bookTitle}<br>   by  <br> ${authorName}`;

      const divider = document.createElement("hr");

      const removeBook = document.createElement("button");
      removeBook.innerText = "Remove";

      removeBook.className = "rmbook";

      removeBook.addEventListener("click", () => {
        // Romoving the book from localStorage
        const index = this.libBooks.findIndex(
          (b) => b.book === bookTitle && b.author === authorName
        );
        if (index !== -1) {
          this.libBooks.splice(index, 1);
          this.updateLocalStorage();
        }
        bookItem.remove();
      });
      bookItem.append(removeBook, divider);
      bookList.append(bookItem);

      document.querySelector("#book-title").value = "";
      document.querySelector("#author-name").value = "";
    }
  }
  displayBooks() {
    this.libBooks.forEach((book) => {
      const bookItem = document.createElement("p");
      const bookList = document.querySelector(".book-list");
      bookItem.innerHTML = `${book.book}<br>   by  <br> ${book.author}`;

      const divider = document.createElement("hr");

      const removeBook = document.createElement("button");
      removeBook.innerText = "Remove";
      removeBook.style.display = "block";

      removeBook.addEventListener("click", () => {
        const index = this.libBooks.indexOf(book);
        if (index !== -1) {
          this.libBooks.splice(index, 1);
        }
        bookItem.remove();
      });

      bookItem.append(removeBook, divider);
      bookList.appendChild(bookItem);
    });
  }
}

//class ends here

const newBook = new AwesomeBooks();
const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", (e) => {
  console.log("listener clicked");
  newBook.addBook(e);
});
