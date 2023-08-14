var addBookButton = document.querySelector('#add-book');
var bookList = document.querySelector('.book-list');

addBookButton.addEventListener('click', () => {
    var bookTitle = document.querySelector('#book-title').value;
    var authorName = document.querySelector('#author-name').value;

    if (bookTitle && authorName) {
        var bookItem = document.createElement('p');
        bookItem.innerHTML = bookTitle + '<br> ' + 'by' + '<br> ' + authorName;

        var divider = document.createElement('hr');
        
        var removeBook = document.createElement('button');
        removeBook.innerText = 'Remove';
        removeBook.style.display = 'block';

        removeBook.addEventListener('click', () => {
            bookItem.remove();
        });

        bookItem.appendChild(removeBook);
        bookItem.appendChild(divider);
        bookList.appendChild(bookItem);

        document.querySelector('#book-title').value = '';
        document.querySelector('#author-name').value = '';
    }
});