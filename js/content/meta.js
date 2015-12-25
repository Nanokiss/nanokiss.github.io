
var Meta = function (columnSize, title, cover, description, credits) {
	this.columnSize = columnSize || '';
	this.title = title || '';
	this.cover = cover || '';
	this.description = description || '';
  this.credits = credits || [''];
}


var metaList = [
	[
		new Meta (3, 'Gif Jam', '', 'description', ['[Alexia]', '[Ben]', '[Ink]', '[Clement]', '[Michael]']),
		new Meta (3, 'Brain Slash', '', '', ['[Ben]', '[Leon]', '[Guillaume]']),
		new Meta (6, 'GPU', '', '')
	], [
		new Meta (4, 'Ding Dong', '[Ding Dong Cover]', '')
  ]
];