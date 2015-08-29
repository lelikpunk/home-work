



var arr1 = [];

function number() {
	var nam = +prompt('Введите число');
	if (nam) {
		arr1.push(nam);
		number();
	} else {
		sumArr(arr1);
	}
};


function sumArr(arr) {
	var sum = 0;
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		sum = sum + arr[i];
	}
	console.log(sum); 
};

number();







