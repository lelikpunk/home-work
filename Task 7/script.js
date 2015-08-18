var myPerson = {
	name: 'lelik',
	age: 26,
	gender: 'male',
	favouriteGame: 'Dota 2',
	profession: 'QA',
	language: 'JavaScript',
	foodName: 'burger',
	toString: function() {
		return (JSON.stringify(myPerson));
	},
	sayHi: function() {
		return 'Привет, меня зовут ' + this.name;
	},
	sayAge: function() {
		return 'Мне ' + this.age + ' лет';
	},
	sayGender: function() {
		return 'Мой пол ' + this.gender;
	},
	playGame: function() {
		return 'Я играю в ' + this.favouriteGame;
	},
	myProf: function() {
		return 'Моя из профессий ' + this.profession;
	},
	study: function() {
		return 'Я учу язык программирования ' + this.language;
	},
	eat: function() {
		return 'Я люблю есть ' + this.foodName;
	}
}

var food = {
	foodName: 'cheeseburger',
	cook: function() {
		return this.name + 'prepares!';
	}
}






console.log(myPerson.name);
console.log(myPerson.age);
console.log(myPerson.sayHi());
console.log(myPerson.eat.call(food));
console.log(typeof(myPerson.eat));
console.log(myPerson.toString());