
var Meta = function (columnSize, rowHeight, title, cover, description, credits) {
	this.columnSize = columnSize || '';
	this.rowHeight = rowHeight || 200;
	this.title = title || '';
	this.cover = cover || '';
	this.description = description || '';
  this.credits = credits || [];
}

var defaultHeight = 400;

var metaList = [[
	new Meta (12, 1, '', '', '[Nanokiss Description]')
], [
	// new Meta (6, defaultHeight, 'Gif Jam', '[Gif Jam Cover]', '[Gif Jam Description]', ['[Alexia]', '[Ben]', '[Ink]', '[Clement]', '[Michael]']),
	new Meta (4, defaultHeight, 'Gossima', '[Gossima VJ Cover]', '[Gossima VJ Description]', ['[Guillaume]', '[Ben]', '[Tatiana]', '[Leon]']),
	new Meta (4, defaultHeight, 'Nanokiss VJ Tool', '[Ding Dong Cover]', '', ['[Leon]', '[Ben]', '[Tatiana]', '[Guillaume]', '[Greg]']),
	new Meta (4, defaultHeight, 'Ding Dong', '[Gossima Ping Pong Cover]', '[Gossima Ping Pong Description]', ['[Leon]', '[Ben]', '[Tatiana]'])
], [
	new Meta (5, defaultHeight, 'Audio Kaleido', '[Ben Kaleido Cover]', '[Ben Kaleido Description]', ['[Ben]']),
	new Meta (4, defaultHeight, 'Brain Slash', '[Brain Slash Cover]', '[Brain Slash Description]', ['[Ben]', '[Leon]', '[Guillaume]']),
	new Meta (3, defaultHeight, 'Anaglyph', '[Simon Anaglyph Cover]', '', ['[Simon]'])
], [
	new Meta (4, defaultHeight, 'x?.3', '[X3 Cover]', '[X3 Description]', ['[Tatiana]']),
	new Meta (3, defaultHeight, 'Nivôse', '[Nivose Cover]', '', ['[Tatiana]']),
	new Meta (5, defaultHeight, 'GPU', '[GPU Cover]', '[GPU Description]', ['[Tatiana]', '[Leon]'])
], [
	new Meta (3, defaultHeight, 'Warband', '[Warband Cover]', '', ['[Leon]']),
	new Meta (5, defaultHeight, 'Morrowind', '[Morrowind Cover]', '', ['[Leon]']),
	new Meta (4, defaultHeight, 'Glitch', '[Glitch2 Cover]', '', ['[Leon]'])
]];