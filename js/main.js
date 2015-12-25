
function setupDescriptions (str) {
	return str.replace(/\[(.*?)\]/g, function (keyword) {
		if (hasDescription(keyword)) {
			return getDescription(keyword);
		} else {
			return keyword;
		}
	})
}
function setupContactLinks (str) {
	return str.replace(/\[(.*?)\]/g, function (keyword) {
		if (hasContact(keyword)) {
			return makeContactLink(getContact(keyword));
		} else {
			return keyword;
		}
	})
}

$('body').ready(function () {
	
	var html = '';

	$.each(metaList, function (index, row) {
		html += '<div class="row">';
		$.each(row, function (index, meta) {
			html += makeColumn(meta.columnSize, makeMetaCell(meta));
		});
		html += '</div>';
	});

	html = setupContactLinks(setupDescriptions(html));

	$('.container-fluid').append(html);

	$.each($('.cover'), function (index, coverElement) {
		var $element = $(coverElement);
		var keyword = $element.html();
		$element.html('');
		if (hasCover(keyword)) 
		{
			var cover = getCover(keyword);
			makeCover(cover, $element);
		}
	});
})

