
function makeColumn (colSM, content) {
  return '<div class="col-xs-12 col-sm-' + colSM + '"><div class="well">' + content + '</div></div>';
  // return '<div class="col-xs-12 col-sm-' + colSM + '"><div class="panel panel-default">' + content + '</div></div>';
}

function makeHeader (title) {
	return '<h3>' + title + '</h3>';
}

function makeCover (cover, $element) {
	$element.css('background-image', 'url("' + cover.preview + '"');
	var $overlay = $(document.createElement('div'));
	$overlay.css('background-image', 'url("' + cover.gif + '"');
	$element.append($overlay);
	$overlay.hide();
	$element.mouseenter(function () {
		$overlay.show();
	})
	$element.mouseleave(function () {
		$overlay.hide();
	})
	$element.addClass('cover-preview cover-background');
	$overlay.addClass('cover cover-background');
}

function makeDescription (description) {
  return '<p class="cover-description">' + description + '</p>';
}

function makeFooter (credits) {
  return '<div class="panel-footer">' + credits.join(' + ') + '</div>';
}

function makeMetaCell (meta) {
	var cell = makeHeader(meta.title);
	cell += '<div class="cover">' + meta.cover + '</div>';
	cell += makeDescription(meta.description);
	cell += makeFooter(meta.credits);
	return cell;
}

function makeLink (title, url) {
	return '<a href="' + url + '">' + title + '</a>';
}
