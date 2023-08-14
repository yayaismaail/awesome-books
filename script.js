// const addBookButton = document.querySelector('#add-book');
// const bookList = document.querySelector('.book-list');

// const libBooks = [];
// addBookButton.addEventListener('click', () => {
//   const bookTitle = document.querySelector('#book-title').value;
//   const authorName = document.querySelector('#author-name').value;
//   const book = {'book':bookTitle, 'author':authorName};
//   libBooks.push(book);

//   if (bookTitle && authorName) {
//     const bookItem = document.createElement('p');
//     bookItem.innerHTML = `${bookTitle}<br>   by  <br> ${authorName}`;

//     const divider = document.createElement('hr');

//     const removeBook = document.createElement('button');
//     removeBook.innerText = 'Remove';
//     removeBook.style.display = 'block';

//     removeBook.addEventListener('click', () => {
//       bookItem.remove();
//     });

//     bookItem.appendChild(removeBook);
//     bookItem.appendChild(divider);
//     bookList.appendChild(bookItem);

//     document.querySelector('#book-title').value = '';
//     document.querySelector('#author-name').value = '';
//   }
// });
// console.log(libBooks);
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

addBookButton.addEventListener('click', () => {
  const bookTitle = document.querySelector('#book-title').value;
  const authorName = document.querySelector('#author-name').value;

  if (bookTitle && authorName) {
    const book = { book: bookTitle, author: authorName };
    libBooks.push(book);
    updateLocalStorage();

    const bookItem = document.createElement('p');
    bookItem.innerHTML = `${bookTitle}<br>   by  <br> ${authorName}`;

    const divider = document.createElement('hr');

    const removeBook = document.createElement('button');
    removeBook.innerText = 'Remove';
    removeBook.style.display = 'block';

    removeBook.addEventListener('click', () => {
      const index = libBooks.findIndex((b) => b.book === bookTitle && b.author === authorName);
      if (index !== -1) {
        libBooks.splice(index, 1);
        updateLocalStorage();
      }
      bookItem.remove();
    });
    bookItem.appendChild(removeBook);
    bookItem.appendChild(divider);
    bookList.appendChild(bookItem);

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

  bookItem.appendChild(removeBook);
  bookItem.appendChild(divider);
  bookList.appendChild(bookItem);
});
