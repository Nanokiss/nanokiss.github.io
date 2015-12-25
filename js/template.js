
function makeColumn (columnSize, content) {
  return '<div class="col-sm-12 col-md-' + columnSize + '"><div class="cell">' + content + '</div></div>';
}

function makeHeader (title) {
	return '<h3>' + title + '</h3>';
}

function makeCover (cover, $element) {
	$element.css('background-image', 'url("' + cover.preview + '")');
	var $overlay = $(document.createElement('div'));
	$overlay.css('background-image', 'url("' + cover.gif + '")');
	$overlay.hide();
	$element.mouseenter(function () { $overlay.show(); })
	$element.mouseleave(function () { $overlay.hide(); })
	$element.addClass('cover-container cover-background');
	$overlay.addClass('cover cover-background');
	$overlay.css('height', $element.height() + 'px');
	if (cover.link.length > 0) {
		$element.css('cursor', 'pointer');
		var link = $('<a>').attr('href', cover.link).attr('target', '_blank');
		link.html($overlay)
		$element.append(link);
	} else {
		$element.append($overlay);
	}
}

function makeDescription (description) {
  return '<p class="cover-description">' + description + '</p>';
}

function makeFooter (credits) {
	if (credits.length > 0) {
	  return '<div class="cover-footer">' + credits.join(' + ') + '</div>';
	} else {
		return '';
	}
}

function makeMetaCell (meta) {
	var cell = makeHeader(meta.title);
	cell += '<div class="cover" style="height:' + meta.rowHeight + 'px">' + meta.cover + '</div>';
	cell += makeDescription(meta.description);
	cell += makeFooter(meta.credits);
	return cell;
}

function makeContactLink (contact) {
	if (contact.url.length > 0) {
		return '<a class="contact" target="_blank" href="' + contact.url + '">' + contact.name + '</a>';
	} else {
		return '<span class="contact">' + contact.name + '</span>';
	}
}
