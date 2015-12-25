
var Cover = function (preview, gif, link) {
  this.preview = preview || '';
  this.gif = gif || '';
  this.link = link || '';
};

var coverList = {
	'[Brain Slash Cover]': new Cover (
    'content/BrainSlash.png', 'content/BrainSlash.gif'
  ), 
  '[Ding Dong Cover]': new Cover (
    'content/DingDong.png', 'content/DingDong.gif',
    'https://www.youtube.com/embed/hzwytMMhHTk'
  ), 
  '[GPU Cover]': new Cover (
    'content/GPU.png', 'content/GPU.gif',
    'https://player.vimeo.com/video/127556214'
  ),
  '[Gif Jam Cover]': new Cover (
    'content/GifJam.png', 'content/GifJam.gif',
    'https://www.facebook.com/gifjamm/?fref=ts'
  ),
  '[X3 Cover]': new Cover (
    'content/X3.png', 'content/X3.gif',
    'https://player.vimeo.com/video/119758881'
  ),
  '[Nivose Cover]': new Cover (
    'content/Nivose.png', 'content/Nivose.gif',
    'https://player.vimeo.com/video/84936835'
  ),
  '[Ben Kaleido Cover]': new Cover (
    'content/BenKaleido.png', 'content/BenKaleido.gif',
    'https://player.vimeo.com/video/139346593'
  ),
  '[Splashes Cover]': new Cover (
    'content/Splashes.png', 'content/Splashes.gif',
    'https://www.youtube.com/embed/LLV7s8FtUy8'
  ),
  '[Gossima VJ Cover]': new Cover (
    'content/Gossima1.png', 'content/Gossima1.gif'
  ),
  '[Gossima Ping Pong Cover]': new Cover (
    'content/Gossima2.png', 'content/Gossima2.gif'
  ),
  '[Warband Cover]': new Cover (
    'content/Warband.png', 'content/Warband.gif',
    'https://www.youtube.com/embed/vRf6f73LZGY'
  ),
  '[Glitch1 Cover]': new Cover (
    'content/Glitch1.png', 'content/Glitch1.gif'
  ),
  '[Glitch2 Cover]': new Cover (
    'content/Glitch2.png', 'content/Glitch2.gif'
  ),
  '[Morrowind Cover]': new Cover (
    'content/Morrowind.png', 'content/Morrowind.gif',
    'https://www.youtube.com/embed/uQdgjZYbhQ4'
  ),
  '[Simon Anaglyph Cover]': new Cover (
    'content/Anaglyph.png', 'content/Anaglyph.gif',
    'https://www.youtube.com/embed/AjxR9mmpGAE'
  )
};

function hasCover (name) {
  return name in coverList;
}

function getCover (name) {
  return coverList[name];
}