var prototypeShape = {
    color: 'blue'
};

var circle = Object.create(prototypeShape);
circle.top = 0;
circle.left = 0;
circle.diameter = 100;
  
var rectangle = Object.create(prototypeShape);
rectangle.top = 0;
rectangle.left = 150;
rectangle.width = 100;
rectangle.height = 100;

circle.render = function render () {
  var element = document.createElement('div');

  element.style.height = this.diameter + 'px';
  element.style.width = this.diameter + 'px';
  element.style.borderRadius = Math.floor(this.diameter/2) + 'px';

  element.style.background = this.color;
  
  element.style.position = 'absolute';
  element.style.top = this.top + 'px';
  element.style.left = this.left + 'px';
  
  document.body.appendChild(element);
  
  this.element = element;
};

rectangle.render = function render () {
  var element = document.createElement('div');
  
  element.style.height = this.height + 'px';
  element.style.width = this.width + 'px';

  element.style.background = this.color;
  
  element.style.position = 'absolute';
  element.style.top = this.top + 'px';
  element.style.left = this.left + 'px';
  
  document.body.appendChild(element);
  
  this.element = element;
};



circle.move = rectangle.move = function move(where) {
  switch(where) {
    case 'up':
      this.element.style.top = (parseInt(this.element.style.top, 10) - parseInt(this.element.style.height, 10)) + 'px'; 
    break;
    case 'down':
      this.element.style.top = (parseInt(this.element.style.top, 10) + parseInt(this.element.style.height, 10)) + 'px';
    break;
    case 'left':
      this.element.style.left = (parseInt(this.element.style.left, 10) - parseInt(this.element.style.width, 10)) + 'px';
    break;
    default:
      this.element.style.left = (parseInt(this.element.style.left, 10) + parseInt(this.element.style.width, 10)) + 'px';
  }
};





window.onload = function() {
  circle.render();
  rectangle.render();
    setInterval(function() {
        rectangle.move();
        circle.move('down');
    },5000);
};

// circle.render();
// var left = circle.move();

// for(var i = 0; i < 5; i++) {
//     (function(e) {
//         setTimeout(function() {
//             var left = circle.move();
//             left;
//         }, 5000);
//     })(i);
// }