var faren = +prompt('Введите число в Фаренгейтах');
var farenInCels = Math.round((faren - 32) * 5/9 * 100) / 100;
alert(faren + ' в Фаренгейтах равно ' + farenInCels + ' в Цельсиях'); 
var cels = +prompt('Введите число в Цельсиях');
var celsInFaren = Math.round((cels * 9/5 + 32) * 100) / 100;
alert(cels + ' в Цельсиях равно ' + celsInFaren + ' в Фаренгейтах');