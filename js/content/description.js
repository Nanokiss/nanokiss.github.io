
var descriptionList = {
	'[Ben Kaleido Description]': 'Real-time audio-responsive 3D animation.',
	'[Ding Dong Description]': 'Interactive VJ',
	'[Nanokiss Description]': 'Nanokiss is a collective of artists, designers and coders, making projects involving interactive visuals and contemplative experiences, questioning reality and virtuality through performances and installations.',
	'[Brain Slash Description]': 'Experimental installation with Leap Motion.<br/>Model is from [Eisko].',
	'[X3 Description]': 'Experimental work made from different poorly encoded videos and musical edition of CXEMA by Kabutogani',
	'[GPU Description]': 'Glitch Processing Unit is a puzzle game based on image\'s alterations.',
	'[Gossima Ping Pong Description]': 'Game installation involving ping pong players.',
	'[Gossima VJ Description]': 'Interactive VJ performance at [C#ROMAKEY]'
};

function hasDescription (name) {
  return name in descriptionList;
}

function getDescription (name) {
  return descriptionList[name];
}