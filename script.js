// create empty list [{book:title, author:athorName}]
// put in localStorage
// fetch from local storage
// display to user
// remove from list and update localStorage

const addBookButton = document.querySelector('#add-book');
const bookList = document.querySelector('.book-list');
const libBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];

// Function to update local storage
function updateLocalStorage() {
  localStorage.setItem('libraryBooks', JSON.stringify(libBooks));
}
// Grabbing the value of the books and the author when the addBookButton is clicked
addBookButton.addEventListener('click', (e) => {
  const bookTitle = document.querySelector('#book-title').value;
  const authorName = document.querySelector('#author-name').value;
  const message = document.querySelector('.message');

  if (bookList === '' || authorName === '') {
    message.innerText = 'Please input Title and Author';
    e.preventDefault();
  }

  // check if bookTitle and authorName are present
  if (bookTitle && authorName) {
    // create an object of the book and author
    const book = { book: bookTitle, author: authorName };
    libBooks.push(book);
    updateLocalStorage();

    const bookItem = document.createElement('p');
    bookItem.innerHTML = `${bookTitle}<br>   by  <br> ${authorName}`;

    const divider = document.createElement('hr');

    const removeBook = document.createElement('button');
    removeBook.innerText = 'Remove';

    removeBook.className = 'rmbook';

    removeBook.addEventListener('click', () => {
      // Romoving the book from localStorage
      const index = libBooks.findIndex(
        (b) => b.book === bookTitle && b.author === authorName,
      );
      if (index !== -1) {
        libBooks.splice(index, 1);
        updateLocalStorage();
      }
      bookItem.remove();
    });
    bookItem.append(removeBook, divider);
    bookList.append(bookItem);

    document.querySelector('#book-title').value = '';
    document.querySelector('#author-name').value = '';
  }
});

// Fetch books from local storage and display them
libBooks.forEach((book) => {
  const bookItem = document.createElement('p');
  bookItem.innerHTML = `${book.book}<br>   by  <br> ${book.author}`;

  const divider = document.createElement('hr');

  const removeBook = document.createElement('button');
  removeBook.innerText = 'Remove';
  removeBook.style.display = 'block';

  removeBook.addEventListener('click', () => {
    const index = libBooks.indexOf(book);
    if (index !== -1) {
      libBooks.splice(index, 1);
      updateLocalStorage();
    }
    bookItem.remove();
  });

  bookItem.append(removeBook, divider);
  bookList.appendChild(bookItem);
});
