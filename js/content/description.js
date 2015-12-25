
var descriptionList = {
	'[Ben Kaleido Description]': 'Real-time audio-responsive 3d animation.',
	'[Ding Dong Description]': 'Nanokiss custom VJ tool.<br/>It use webcam input and stuffs.',
	'[Brain Slash Description]': 'Experimental installation with Leap Motion. Model is from [Eisko]'
};

function hasDescription (name) {
  return name in descriptionList;
}

function getDescription (name) {
  return descriptionList[name];
}