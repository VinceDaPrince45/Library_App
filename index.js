
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
//   write code to loop through library and add display
}

// Whenever press submit button, apply Book function and add  to library
// After every submission, loop through library and add new cards

const submit = document.querySelector