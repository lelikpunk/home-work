// var appEnd = document.body.appendChild;
// var crEate = document.createElement;
function Book(bookName, author, pages) {
  this.name = bookName;
  this.author = author;
  this.pages = pages;
}

var books = [];
books.push(new Book('JavaScript ', 'Crokford ', 300));
books.push(new Book('PHP ', 'Ali ', 400));
books.push(new Book('CSS ', 'Jon ', 500));
books.push(new Book('Java ', 'sdfsf ', 700));

var ulObj = document.createElement('ul');

function renderBook(element, index, array) {
  var liObj = document.createElement('li'),
      spanName = document.createElement('span'),
      spanAuthor = document.createElement('span'),
      spanPage = document.createElement('span');

  spanName.innerHTML = element.name;
  spanAuthor.innerHTML = element.author;
  spanPage.innerHTML = element.pages;

  liObj.appendChild( spanName );
  liObj.appendChild( spanAuthor );
  liObj.appendChild( spanPage );
  ulObj.appendChild( liObj );
}

books.forEach(renderBook);

document.body.appendChild(ulObj );
 
var clickHandler = function clickHandler (key) {
  books.sort(function(argument) {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });
}

function createButton(text, key, callback) {
  var button = document.createElement('button');
  button.innerHTML = text;
  newCallback = callback.bind(null, key);
  button.addEventListener('click', newCallback);
  document.body.appendChild(button);
}

createButton('Sort By Author', name, clickHandler);
createButton('Sort By Name', clickHandler);
createButton('Sort By Page', clickHandler);


console.log(books);