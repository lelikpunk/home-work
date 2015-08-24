var arr1 = ['А', 'Р', 'Б', 'У', 'З'];
var	arr2 = ['_', '_', '_', '_', '_'];

var game = {
	letter: function() {
		
		var let = prompt('Введите букву');
		game.chekLet(arr1, let);
	},

	chekLet: function(arr, let) {
		var chekOneLet = false;
		var chekArr = false;
		arr.forEach(function(elem, i, arr) {
			if (elem == let) {
			arr2[i] = let;
			chekOneLet = true;
			}
			if (arr2[i] == '_') {
				chekArr = true;
			}
		});
		if (chekOneLet) {
		console.log('Вы угадали букву');
		console.log(arr2.join(' '));
		if (!chekArr) {
			console.log('Вы выиграли');
		} else {
			game.letter();
		}
	} else {
		console.log('Нет, не верно');
		game.letter();
	}
	}
	

}





game.letter();

