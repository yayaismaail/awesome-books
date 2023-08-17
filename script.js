/* eslint-disable no-unused-vars */
class LibraryApp {
  constructor() {
    this.addBookButton = document.querySelector('#add-book');
    this.bookList = document.querySelector('.book-list');
    this.libBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];

    this.libBooks.forEach((book) => this.displayBook(book));
  }

  updateLocalStorage() {
    localStorage.setItem('libraryBooks', JSON.stringify(this.libBooks));
  }

  handleAddBook(e) {
    e.preventDefault();

    const bookTitle = document.querySelector('#book-title').value;
    const authorName = document.querySelector('#author-name').value;
    const display = document.querySelector('.display');

    if (bookTitle === '' || authorName === '') {
      display.classList.add('message');
      display.innerText = 'Please Enter Title and Author';

      return;
    }

    const currentDate = document.querySelector('.date');
    setInterval(() => {
      const d = new Date();
      currentDate.innerHTML = `${d.toDateString()} ${d.toLocaleTimeString()}`;
    }, 1000);

    const book = { book: bookTitle, author: authorName };
    this.libBooks.push(book);
    this.updateLocalStorage();
    this.displayBook(book);

    document.querySelector('#book-title').value = '';
    document.querySelector('#author-name').value = '';
  }

  displayBook(book) {
    const div = document.createElement('div');
    div.className = 'display-books';
    const bookItem = document.createElement('p');
    bookItem.className = 'display-item';
    bookItem.innerHTML = `${book.book} by ${book.author}`;

    const removeBook = document.createElement('button');
    removeBook.innerText = 'Remove';
    removeBook.className = 'rmv-btn';

    removeBook.addEventListener('click', () => {
      const index = this.libBooks.indexOf(book);
      if (index !== -1) {
        this.libBooks.splice(index, 1);
        this.updateLocalStorage();
      }
      bookItem.remove();
    });

    bookItem.append(removeBook);
    div.append(bookItem);
    this.bookList.append(div);
  }
}

const libraryApp = new LibraryApp();
const button = document.querySelector('#add-book');
button.addEventListener('click', (e) => {
  libraryApp.handleAddBook(e);
});
