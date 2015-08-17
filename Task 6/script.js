var arr1 = ['А', 'Р', 'Б', 'У', 'З'];
var arr2 = ['_', '_', '_', '_', '_'];

function chekLet(letter) {
	var chekOneLet = false;
	var chekArr = false;
	var len = arr1.length;
	for (var i = 0; i < len; i++) {
		if (arr1[i] == letter) {
			arr2[i] = letter;
			chekOneLet = true;
		}
		if (arr2[i] == '_') {
			chekArr = true;
		}
	}
	if (chekOneLet) {
		console.log('Вы угадали букву');
		console.log(arr2.join(' '));
		if (!chekArr) {
			console.log('Вы выиграли');
		}
	} else {
		console.log('Нет, не верно');
	}
}

