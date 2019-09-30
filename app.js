var fs = require('fs-extra');
var path = require('path');
var fetch = require('node-fetch');

const VINE_ID_URL = 'https://do-space.jmoore.dev/vine_ids_no_dupes.txt';
const VINE_ID_FILE = path.join(__dirname, 'vine_ids_no_dupes.txt');
const ARCHIVE_URL = 'https://archive.vine.co/posts/';


// First check if the vine_ids.txt file exists
fs.pathExists(VINE_ID_FILE)
	.then((exists) => {
		exists ? readVineIds() : downloadVineIds();
	})
	.catch((err) => console.error(err));

function downloadVineIds() {
	fetch(VINE_ID_URL)
		.then((res) => res.text())
		.then((text) => fs.writeFile(VINE_ID_FILE, text))
		.then(() => readVineIds());
}

function readVineIds() {
	console.log('yeets');
}