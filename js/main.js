
$('body').ready(function () {
	
	var html = '';

	$.each(metaList, function (index, row) {
		html += '<div class="row">';
		$.each(row, function (index, meta) {
			html += makeColumn(meta.columnSize, makeMetaCell(meta));
		});
		html += '</div>';
	});

	html = html.replace(/\[(.*?)\]/g, function (keyword) 
	{
		if (hasContact(keyword)) 
		{
			var contact = getContact(keyword);
			return makeLink(contact.name, contact.url);
		} 
		else if (hasCover(keyword)) 
		{
			var cover = getCover(keyword);
			return makeCover(cover);
		} 
		else 
		{
			return keyword;
		}
	})

	$('.container-fluid').append(html);
})

