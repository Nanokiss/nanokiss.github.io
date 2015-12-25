
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
	new Meta (6, defaultHeight, 'Gif Jam', '[Gif Jam Cover]', '[Gif Jam Description]', ['[Alexia]', '[Ben]', '[Ink]', '[Clement]', '[Michael]']),
	new Meta (6, defaultHeight, 'Ding Dong', '[Ding Dong Cover]', '[Ding Dong Description]', ['[Leon]', '[Ben]', '[Guillaume]', '[MechBird]'])
], [
	new Meta (5, defaultHeight, 'Audio Kaleido', '[Ben Kaleido Cover]', '[Ben Kaleido Description]', ['[Ben]']),
	new Meta (4, defaultHeight, 'Gossima', '[Gossima Ping Pong Cover]', '[Gossima Ping Pong Description]'),
	new Meta (3, defaultHeight, 'Brain Slash', '[Brain Slash Cover]', '[Brain Slash Description]', ['[Ben]', '[Leon]', '[Guillaume]'])
], [
	new Meta (3, defaultHeight, 'Anaglyph', '[Simon Anaglyph Cover]', '', ['[Simon]']),
	new Meta (3, defaultHeight, 'GPU', '[GPU Cover]', '', ['[MechBird]', '[Leon]']),
	new Meta (3, defaultHeight, 'x?.3', '[X3 Cover]', '[X3 Description]', ['[MechBird]']),
	new Meta (3, defaultHeight, 'Nivôse', '[Nivose Cover]', '[Nivose Description]', ['[MechBird]'])
], [
	new Meta (3, defaultHeight, 'Splashes', '[Splashes Cover]', '', ['[Leon]']),
	new Meta (3, defaultHeight, 'Glitch', '[Glitch2 Cover]', '', ['[Leon]']),
	new Meta (3, defaultHeight, 'Warband', '[Warband Cover]', '', ['[Leon]']),
	new Meta (3, defaultHeight, 'Morrowind', '[Morrowind Cover]', '', ['[Leon]'])
]];