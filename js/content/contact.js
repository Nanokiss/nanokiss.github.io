
var Contact = function (name, url) {
  this.name = name || '';
  this.url = url || '';
};

var contactList = {
	'[Tatiana]': new Contact ('Tatiana Vilela', 'http://mechbird.fr/'),
	'[Leon]': new Contact ('Leon Denise', 'http://leon196.github.io/'),
	'[Ben]': new Contact ('Benjamin Vedrenne', 'http://glkitty.tumblr.com/'),
	'[Alexia]': new Contact ('Alexia Schmidt', 'http://www.lachafouinade.com/'),
	'[Clement]': new Contact ('Clement Rouil', 'https://vimeo.com/user11295517/videos'),
	'[Gif Jam]': new Contact ('Gif Jam', 'https://www.facebook.com/gifjamm/?fref=ts'),
	'[Ink]': new Contact ('Thomas', 'http://www.inkcorp.fr/'),
	'[Michael]': new Contact ('Michael', ''),
	'[Guillaume]': new Contact ('Guillaume Noisette', ''),
	'[Greg]': new Contact ('Gregory Semah', ''),
  '[Eisko]': new Contact('Eisko', 'http://www.eisko.com/')
};

function hasContact (name) {
  return name in contactList;
}

function getContact (name) {
  return contactList[name];
}