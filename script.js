'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list'); 

  const root = document.getElementById('root');
  existingElement && root.removeChild(existingElement);

  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

    let bookinfo = document.querySelector(".book-list");

    if (bookinfo){
        bookinfo.addEventListener("mouseover", function(e) {
            if (e.target && e.target.matches("li.book-list__item")) {
                let bookID = e.target.value
                let book = bookList.find(book => book.id === bookID)
                bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', bookDetails(book));
            }
        });

        bookinfo.addEventListener("mouseout", function(e) {
            let bookDetail = document.querySelector("#bookDetail");
            if(bookDetail)
                bookDetail.remove();
        });
    }
}



