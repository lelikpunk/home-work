var circle = {
  diameter : '100px',
  color : 'red',
  element: document.createElement('div'),
  render: function render () {
    var el = this.element;
    el.style.height = this.diameter;
    el.style.width = this.diameter;
    el.style.background = 'red';
    el.style.borderRadius = '50%';
    el.style.position = 'absolute';
    el.style.top = '0';
    el.style.left = '0';
    console.log('Выводим круг на страницу');
    document.body.appendChild(el);
  },
  move: function move (where) {
    console.log('Выводим круг на страницу');
    var tempSize = 0;
    switch(where) {
      case 'down':
        tempSize =  parseInt(this.element.style.top, 10);
        tempSize = tempSize + 100;
        this.element.style.top = tempSize + 'px';
        break;
      case 'up':
        tempSize =  parseInt(this.element.style.top, 10);
        tempSize = tempSize - 100;
        this.element.style.top = tempSize + 'px';
        break;
      case 'left':
        tempSize =  parseInt(this.element.style.left, 10);
        tempSize = tempSize - 100;
        this.element.style.left = tempSize + 'px';
        break;
      case 'rigth':
      default:
        tempSize =  parseInt(this.element.style.left, 10);
        tempSize = tempSize + 100;
        this.element.style.left = tempSize + 'px';
    }
  }
}

circle.render();
circle.move('right');

