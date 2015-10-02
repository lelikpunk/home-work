var inputTarget = document.getElementById('foo');

inputTarget.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		var ulObj = document.getElementById('ul');
        var liObj = document.createElement('li'),
        	spanName = document.createElement('span');
        spanName.innerHTML = document.getElementById('foo').value;
        liObj.appendChild(spanName);
        ulObj.appendChild(liObj);
    }

});



