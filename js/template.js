function column (colSM, content) {
  return '<div class="col-xs-12 col-sm-' + colSM + '"><div class="well">' + content + '</div></div>';
  // return '<div class="col-xs-12 col-sm-' + colSM + '"><div class="panel panel-default">' + content + '</div></div>';
}

function header (title) {
  return '<h3>' + title + '</h3>';
}

function cover (cover) {
  return '<div class="cover" style="background-image: url(\'' + cover + '\'); background-size: cover; background-position: center"></div>';
}

function body (content) {
  return '<div class="panel-body">' + content + '</div>';
}

function footer (content) {
  return '<div class="panel-footer">' + content + '</div>';
}

function link (title, url) {
	return '<a href="' + url + '">' + title + '</a>';
}

var html = '';

$.each( dataList, function( index, data ) {

	html += column(data['columnSize'], header(data['header']) + cover(data['cover']));// + body(data['body']));// + footer(data['footer']));
});

html = html.replace(/\[(.*?)\]/g, function (keyword) {
	if (keyword in linkList) {
		return link(keyword.substring(1, keyword.length - 1), linkList[keyword]);
	} else if (keyword in mediaList) {
		return mediaList[keyword];
	} else {
		return keyword;
	}
})

console.log(html)
$('.row').append(html);

