(function() {
	var view = {
		render1: function() {
			console.info('Render 1');
		},
		render2: function() {
			console.info('Render 2');
		}
	};

	window.app = window.app || {};
	window.app.view = view;

})();