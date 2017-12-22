$(window).on('load', function () {
	$.ajax({
		url: '/api/rjsxjj'
	}).then(function(data) {
		var people = data.data.people;
		var myTemplate = Handlebars.compile($("#tpl").html());
			$('ul.people-items').html(myTemplate(people));
	});
});
