function GetQueryString(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null) {return  unescape(r[2]); }
	return null;
}
$(window).on('load', function () {
	$.ajax({
		url: '/api/rjsxjj'
	}).then(function(data) {
		var people = data.data.people;
		var myTemplate = Handlebars.compile($("#tpl").html());
		$('ul.people-items').html(myTemplate(people));
		return data;
	}).then(function(data) {
		var id = GetQueryString('people') || 'zoug';
		for (var k in data.data) {
			if (k == id) {
				var txt = data.data.k;
				var myTemplate = Handlebars.compile($("#tpl2").html());
				$('.container').html(myTemplate(txt));
			}
		}
	});


});
