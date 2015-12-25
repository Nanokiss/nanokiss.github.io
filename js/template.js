
function makeColumn (colSM, content) {
  return '<div class="col-xs-12 col-sm-' + colSM + '"><div class="well">' + content + '</div></div>';
  // return '<div class="col-xs-12 col-sm-' + colSM + '"><div class="panel panel-default">' + content + '</div></div>';
}

function makeHeader (title) {
	return '<h3>' + title + '</h3>';
}

function makeCover (cover) {
	var uid = 'cover-' + coverCount;
	var css = uid + ':hover { background-image: url("' + cover.gif + '"); } ';
	css += uid + ' { background-image: url(\'' + cover.preview + '\');"';
	style = document.createElement('style');
	console.log(style)
	style.appendChild(document.createTextNode(css));
	document.getElementsByTagName('head')[0].appendChild(style);
	++coverCount;
  return '<div class="cover cover-background ' + uid + '" style="></div>';
}

function makeDescription (description) {
  return '<p class="cover-description">' + description + '</p>';
}

function makeFooter (credits) {
  return '<div class="panel-footer">' + credits.join(' + ') + '</div>';
}

function makeMetaCell (meta) {
	var cell = makeHeader(meta.title);
	cell += meta.cover;
	cell += makeDescription(meta.description);
	cell += makeFooter(meta.credits);
	return cell;
}

function makeLink (title, url) {
	return '<a href="' + url + '">' + title + '</a>';
}
