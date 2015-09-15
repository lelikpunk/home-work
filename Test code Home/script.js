var authorApi = (function(){

    var authors = [];
    var ulObj = document.createElement('ul');
    function Author (name,lastname){
        this.name = name;
        this.lastname = lastname;
    }

    function createButton (text, key, callback) {
        var button = document.createElement('button');
        button.innerHTML = text;
        var newCallback = callback.bind(null, key);
        button.addEventListener('click', newCallback); 
        document.body.appendChild(button);
    }

    function renderAuthor (element, index, array) {
        var liObj = document.createElement('li'),
            spanName = document.createElement('span'),
            spanLastname = document.createElement('span'),
            removeButton = document.createElement('button');
        spanName.innerHTML = element.name + ' ';
        spanLastname.innerHTML = element.lastname;
        removeButton.innerHTML = 'x';
        removeButton.addEventListener('click', removeAuthor.bind(null, element, index, liObj));
        liObj.appendChild( spanName );
        liObj.appendChild( spanLastname );
        liObj.appendChild( removeButton );
        ulObj.appendChild( liObj );
    }

    function removeAuthor(author, index, authorLi) {
        authors.splice(index, 1);
        authorLi.parentNode.removeChild(authorLi);
    }

    function createInput(name, conteiner) {
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '20');
        input.setAttribute('name', name);
        input.setAttribute('placeholder', name);
        conteiner.appendChild(input);
        return input;
    }

    return{
        getAuthors: function getAuthors(){
            return authors;
        },
        init: function init(){

            authors.push(new Author('Vasya', 'Petrov'));

            authors.forEach(renderAuthor);

            document.body.appendChild( ulObj );

            var clickHandler = function clickHandler ( key ) {
                authors.sort(function (a, b) {
                    
                    var first = a[ key ],
                        second = b[ key ];

                    if(key !== 'pages') {
                        first = first[0].toLowerCase();
                        second = second[0].toLowerCase();
                    }
                  if (first > second) {
                    return 1;
                  }
                  if (first < second) {
                    return -1;
                  }
                  return 0;
                });

                ulObj.innerHTML = '';
                
                authors.forEach(renderAuthor);
            }

            createButton('Sort By Name', 'name', clickHandler);
            createButton('Sort By Lastname', 'lastname', clickHandler);


            var formAuthor = document.createElement('form');


            var nameInput = createInput('name', formAuthor);
            var lastnameInput = createInput('lastname', formAuthor);


            var newAuthorButton = document.createElement('button');
            newAuthorButton.innerHTML = 'Add Author';

            function reset(){
                nameInput.value = '';
                lastnameInput.value = '';
            }

            formAuthor.addEventListener('submit', function(event){
                var newAuthor = new Author(nameInput.value, lastnameInput.value);
                authors.push(newAuthor);

                ulObj.innerHTML = '';
                authors.forEach(renderAuthor);

                reset();

                event.preventDefault();
            });

            formAuthor.appendChild(newAuthorButton);
            document.body.appendChild(formAuthor);
        }
    }

})();


console.log(authorApi);
console.log(authorApi.getAuthors());
authorApi.init();
console.log(authorApi.getAuthors());