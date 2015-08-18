var person = {
	name: 'lelik',
	age: 26,
	gender: 'male',
	sayHi: function() {
		console.log('Hi, my name is ' + this.name);
	}
};


var personData = JSON.stringify(person);
console.log(personData);