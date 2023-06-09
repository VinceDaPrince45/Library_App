
let myLibrary = [];

function Book(title,author,pages,status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
  }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    cards.textContent = '';
    myLibrary.forEach((book) => {
        let card = document.createElement('div');
        card.textContent = book.info();
        cards.appendChild(card);
        for (const radioButton of radioButtons) {
            radioButton.checked = false;
        }
        title.value = '';
        author.value = '';
        pages.value = '';
    });
  }
//   write code to loop through library and add display

// Whenever press submit button, apply Book function and add  to library
// After every submission, loop through library and add new cards

const submit = document.querySelector('button[type="submit"]');
const generate = document.querySelector('button[type="button"]');
const radioButtons = document.querySelectorAll('input[name="status"]');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#numberPages');
const cards = document.querySelector('.cards')
const form = document.querySelector('#form');

submit.addEventListener('click', () => {    
    let bookTitle;
    let bookAuthor;
    let bookPages;
    let bookStatus;
    let book;
    bookTitle = title.value;
    bookAuthor = author.value;
    bookPages = pages.value;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            bookStatus = radioButton.value;
            break;
        }
    }
    book = new Book(bookTitle,bookAuthor,bookPages,bookStatus,book);
    console.log(book);
    addBookToLibrary(book);
    form.style.display = 'none';
});

generate.addEventListener('click', () => {
    form.style.display = 'block';
});