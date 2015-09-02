// var appEnd = document.body.appendChild;
// var crEate = document.createElement;
function Book(bookName, author, pages) {      //конструктор. Принимающий три параметра. 
  this.name = bookName;                       //Параметр Name.
  this.author = author;                       //Параметр автор.
  this.pages = pages;                         //Параметр страницы.
}

var books = [];                                                   //Создаем пустой массив books
books.push(new Book('JavaScript ', 'Crokford ', 300));            //Создаем обьект с помощью конструктора Book и пушим в массив.
books.push(new Book('PHP ', 'Ali ', 400));                        //Создаем обьект с помощью конструктора Book и пушим в массив.
books.push(new Book('CSS ', 'Jon ', 500));                        //Создаем обьект с помощью конструктора Book и пушим в массив.
books.push(new Book('Java ', 'sdfsf ', 700));                     //Создаем обьект с помощью конструктора Book и пушим в массив.

var ulObj = document.createElement('ul');                         //Создаем новый UL 'его еще нет в доме'

function renderBook(element, index, array) {                      //Функция отрисовки спанов. Принимает на вход три параметра как в forEach. Так как вызывать будем через него.
  var liObj = document.createElement('li'),                       //Создаем Li. В DOM-е его еще нету.
      spanName = document.createElement('span'),                  //Создаем спан. Имя.
      spanAuthor = document.createElement('span'),                //Создаем спан. Автор.  
      spanPage = document.createElement('span');                  //Создаем спан. Страницы.

  spanName.innerHTML = element.name;                               //Добавляем текст в спаны. Вытаскивая их из обьекта через точку.
  spanAuthor.innerHTML = element.author;                           //Добавляем текст в спаны. Вытаскивая их из обьекта через точку.
  spanPage.innerHTML = element.pages;                             //Добавляем текст в спаны. Вытаскивая их из обьекта через точку.

  liObj.appendChild( spanName );                                  //Вставляем спан в LI.
  liObj.appendChild( spanAuthor );                                //Вставляем спан в LI.
  liObj.appendChild( spanPage );                                  //Вставляем спан в LI.
  ulObj.appendChild( liObj );                                     //Вставляем LI в UL.
}

books.forEach(renderBook);                                        //На массиве books вызываем функцию renderBook через forEach.

document.body.appendChild(ulObj );                                //Добавляем в боди UL. Тем самым отрисовывая его в DOM-е.
 
var clickHandler = function clickHandler (key) {                  //Функция сортировки. Которую мы вешаем на кнопку.
  books.sort(function(argument) {                                 //Вызываем метод сорт на массиве books.
    if (a[key] > b[key]) {                                        //
      return 1;                                                   //
    }                                                             //
    if (a[key] < b[key]) {                                        //
      return -1;                                                  //
    }                                                             //
    return 0;                                                     //  
  });                                                             //
}

function createButton(text, key, callback) {                       //Функция создания кнопки. Получает на вход 3 параметра.
  var button = document.createElement('button');                   //Создание кнопки.
  button.innerHTML = text;                                         //Задаем кнопке название через входной параметр.
  newCallback = callback.bind(null, key);                          //Делаем ссылку на колбэк. Входящий параметр. связываем его с пустыи бьектом null.
                                                                   //И передаем второй параметр ключ. Который используется в верхней функции.

  button.addEventListener('click', newCallback);                   //Вешаем слушатель на кнопку.
  document.body.appendChild(button);                               //Отрисовываем кнопку в DOM.
}

createButton('Sort By Author', name, clickHandler);                //Вызовы создания кнопки с привязкой к параметру. И к функции колбэка.
createButton('Sort By Name', clickHandler);                       //Вызовы создания кнопки с привязкой к параметру. И к функции колбэка.
createButton('Sort By Page', clickHandler);                       //Вызовы создания кнопки с привязкой к параметру. И к функции колбэка.


console.log(books);                                                 //