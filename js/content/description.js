
var descriptionList = {
	'[Ben Kaleido Description]': 'Real-time audio-responsive 3D animation.',
	'[Ding Dong Description]': 'VJ tool.',
	'[Nanokiss Description]': 'Nanokiss is a collective of artists, designers and coders, making projects involving interactive visuals and contemplative experiences, questioning reality and virtuality through performances and installations.',
	'[Brain Slash Description]': 'Experimental installation with Leap Motion.<br/>Model is from [Eisko].'
};

function hasDescription (name) {
  return name in descriptionList;
}

function getDescription (name) {
  return descriptionList[name];
}