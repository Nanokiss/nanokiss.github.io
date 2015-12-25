
var descriptionList = {
	'[Ding Dong Description]': 'The Nanokiss VJ tool.<br/>It use webcam input and stuffs.'
};

function hasDescription (name) {
  return name in descriptionList;
}

function getDescription (name) {
  return descriptionList[name];
}