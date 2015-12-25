
var Contact = function (name, url) {
  this.name = name || '';
  this.url = url || '';
};

var contactList = {
	'[MechBird]': new Contact ('MechBird', 'http://mechbird.fr/'),
	'[Leon]': new Contact ('Leon', 'http://leon196.github.io/'),
	'[Ben]': new Contact ('Ben', 'http://glkitty.tumblr.com/'),
	'[Alexia]': new Contact ('Alexia', 'http://www.lachafouinade.com/'),
	'[Clement]': new Contact ('Clement', 'https://vimeo.com/user11295517/videos'),
	'[Gif Jam]': new Contact ('Gif Jam', 'https://www.facebook.com/gifjamm/?fref=ts'),
	'[Ink]': new Contact ('Ink', 'http://www.inkcorp.fr/'),
	'[Michael]': new Contact ('Michael', ''),
	'[Guillaume]': new Contact ('YomYomNuts', ''),
  '[Eisko]': new Contact('Eisko', 'http://www.eisko.com/')
};

function hasContact (name) {
  return name in contactList;
}

function getContact (name) {
  return contactList[name];
}