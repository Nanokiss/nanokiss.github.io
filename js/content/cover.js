
var Cover = function (preview, gif, content) {
  this.preview = preview || '';
  this.gif = gif || '';
  this.content = content || '';
};

var coverList = {
	'[Bran Slash Cover]': new Cover (
    'content/GifJam.gif',
    'content/GifJam.gif',
    '<div class="squareWrapper"><iframe src="https://vine.co/v/e2Zg1WQtg6V/embed/simple" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script></div>'
  ), 
  '[Ding Dong Cover]': new Cover (
    'content/DingDong.png',
    'content/DingDong.gif',
    '<div class="videoWrapper"><iframe src="https://www.youtube.com/embed/hzwytMMhHTk" frameborder="0" allowfullscreen></iframe></div>'
  ), 
  '[GPU Cover]': new Cover (
    'content/GifJam.gif',
    'content/GifJam.gif',
    '<div class="videoWrapper"><iframe src="https://player.vimeo.com/video/127556214" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
  ),
  '[Gif Jam Cover]': new Cover (
    'content/GifJam.gif',
    'content/GifJam.gif',
    ''
  )
};

function hasCover (name) {
  return name in coverList;
}

function getCover (name) {
  return coverList[name];
}