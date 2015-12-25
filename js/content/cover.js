
var Cover = function (preview, gif, content, link) {
  this.preview = preview || '';
  this.gif = gif || '';
  this.content = content || '';
  this.link = link || '';
};

var coverList = {
	'[Brain Slash Cover]': new Cover (
    'content/BrainSlash.png',
    'content/BrainSlash.gif',
    '<div class="squareWrapper"><iframe src="https://vine.co/v/e2Zg1WQtg6V/embed/simple" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script></div>'
  ), 
  '[Ding Dong Cover]': new Cover (
    'content/DingDong.png',
    'content/DingDong.gif',
    '<div class="videoWrapper"><iframe src="https://www.youtube.com/embed/hzwytMMhHTk" frameborder="0" allowfullscreen></iframe></div>'
  ), 
  '[GPU Cover]': new Cover (
    'content/GPU.png',
    'content/GPU.gif',
    '<div class="videoWrapper"><iframe src="https://player.vimeo.com/video/127556214" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
  ),
  '[Gif Jam Cover]': new Cover (
    'content/GifJam.png',
    'content/GifJam.gif',
    ''
  ),
  '[X3 Cover]': new Cover (
    'content/X3.png',
    'content/X3.gif',
    ''
  ),
  '[Nivose Cover]': new Cover (
    'content/Nivose.png',
    'content/Nivose.gif',
    '',
    'http://mechbird.fr/en/xwhydotcube.html'
  )
};

function hasCover (name) {
  return name in coverList;
}

function getCover (name) {
  return coverList[name];
}