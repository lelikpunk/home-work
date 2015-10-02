function runAjax() {
	var inp0 = $('#inp0').val();
	$.ajax({
		url: 'http://api.nestoria.co.uk/api? country=uk&pretty=1&action=search_listings& encoding=json&listing_type=buy& page=1&number_of_results=6&' + inp0 + '=leeds',
		method: 'GET',
		timeout: 5000,
		dataType: 'jsonp',
		success: function(data) {
			console.log(data);
		}
	})
}

$(document).ready(function() {
	$('#btn0').click(runAjax);
});