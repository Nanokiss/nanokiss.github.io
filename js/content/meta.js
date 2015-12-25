
var Meta = function (columnSize, rowHeight, title, cover, description, credits) {
	this.columnSize = columnSize || '';
	this.rowHeight = rowHeight || 200;
	this.title = title || '';
	this.cover = cover || '';
	this.description = description || '';
  this.credits = credits || [];
}

var defaultHeight = 300;

var metaList = [[
	new Meta (6, 400, 'Gif Jam', '[Gif Jam Cover]', '[Gif Jam Description]', ['[Alexia]', '[Ben]', '[Ink]', '[Clement]', '[Michael]']),
	new Meta (6, 400, 'Gif Jam', '[Gif Jam Cover]', '[Gif Jam Description]', ['[Alexia]', '[Ben]', '[Ink]', '[Clement]', '[Michael]'])
], [
	new Meta (3, defaultHeight, 'Brain Slash', '[Brain Slash Cover]', '', ['[Ben]', '[Leon]', '[Guillaume]']),
	new Meta (3, defaultHeight, 'Brain Slash', '[Brain Slash Cover]', '', ['[Ben]', '[Leon]', '[Guillaume]']),
	new Meta (3, defaultHeight, 'Brain Slash', '[Brain Slash Cover]', '', ['[Ben]', '[Leon]', '[Guillaume]']),
	new Meta (3, defaultHeight, 'GPU', '[GPU Cover]', '')
], [
	new Meta (4, defaultHeight, 'Ding Dong', '[Ding Dong Cover]', '[Ding Dong Description]'),
	new Meta (4, defaultHeight, 'x?.3', '[X3 Cover]', '[X3 Description]'),
	new Meta (4, defaultHeight, 'Nivôse', '[Nivose Cover]', '[Nivose Description]'),
]];