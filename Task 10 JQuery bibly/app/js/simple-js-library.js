(function(global){

	// The `_` object constructor
	function simpleJSLibrary(id){

		var about = {
	      version: 0.1,
	      author: "Agatha Christie",
	      created: "September 2015",
	      updated: null
	   	};

	  /*TODO: 1. Добавить проверку параметра id.
			это можеть быть
				или '#main' - id
					в этом случае ничего не меняется
				или '.red' - class
					в этом случае вместо querySelector используем querySelectorAll
				или 'div' - tagName
					в этом случае вместо querySelector используем querySelectorAll

	  */
	   	if (id) {
	   		if (global === this) {
		      return new simpleJSLibrary(id);
		    }
			  this.e = document.querySelectorAll(id);
			  if (this.e.length > 1) {
			  	console.log(this.e.length);
			  }else{
			  	this.e = document.querySelector(id);
			  	console.log(this.e.length);
			  }
		    return this;
	   	} else {
	   		// Не указан параметр id - вернуть объект about
	   		return about;
	   	}
	}

	function showError (text) {
  	console.error(text);
	}
	function showNodeElementError () {
		showError('Can\'t find element node');
	}
	// our dot-operator methods
	simpleJSLibrary.prototype = {
		/*TODO: 2. Улучшить show/hide
			когда будет сделана задача №1
			в this.e возможно будет хранится массив или nodeList
			Нужно что бы для массива работали методы show/hide
			Для этого нужно будет по массиву или nodeList пройтись циклом
			и для каждого элемента выполнять изменения стиля
	  */
		show: function () {
		  // implementation
		  if (this.e.__proto__.constructor.name == "NodeList") {
		  	Array.prototype.forEach.call(this.e, function(e) { 
		  		e.style.display = 'inherit';
		  	});

		  } else if (this.e.__proto__.constructor.name !== "NodeList") {
		  	this.e.style.display = 'inherit';
		  	
		  }else{
		  	showNodeElementError();
		  }
		  return this;
		},
		hide: function () {
		  // implementation
		  if (this.e.__proto__.constructor.name == "NodeList") {
		  	Array.prototype.forEach.call(this.e, function(e) { 
		  		e.style.display = 'none';
		  	});

		  } else if (this.e.__proto__.constructor.name !== "NodeList") {
		  	this.e.style.display = 'none';
		  	
		  }else{
		  	showNodeElementError();
		  }
		  return this;
		},
		/*TODO: 3. Реализовать метод toggle()
			который будет вызывать то show(), то hide()
			в зависимости от стиля элемента
	  */

	  	toggle: function () {
	  		if (this.e.style.display == 'inherit') {
	  		this.e.hide();
	  		}else{
	  		this.e.show();
	  		}
	  	},

	  /*TODO: 4. Реализовать метод size(height, width)
			который будет принимать два параметра
			первый паарамер 'height', второй - 'width'

			Если параметры не указаны, то возвращать текущие значения высоты и ширины объекта
			Если параметры указаны, то меняем высоту и ширину элемента и возвращаем this
		*/

		size: function (height, width) {
		  
		  if (this.e) {
			  var nheight, nwidth;
			  if (height || width) {
			  	if (height != undefined) {
					  nheight = height;
				  };
				  if (width != undefined) {
					  nwidth = width;
				  };		  
				  this.e.style.height = nheight;
				  this.e.style.width = nwidth;
			  } else {
			  	return {
			  		width: this.e.offsetWidth,
			  		height: this.e.offsetHeight
			  	};
			  }
			  
		  } else {
		  	showNodeElementError();
		  }
		  return this;
		}		

	  /*TODO: 5. Реализовать метод val()
	  Который возвращает значение 'this.e.value' или меняет его в зависимости от того есть парамет или нет
	  */

	  /*TODO: 6. Реализовать метод addClass()
	  который добавляет строку в аттрибут class
	  */

	  /*TODO: 7. Реализовать метод removeClass()
	  который удаляет строку из аттрибута class
	  */
	};

	var sLib = simpleJSLibrary;

	global.simpleJSLibrary = global.sLib = sLib;
})(window);
