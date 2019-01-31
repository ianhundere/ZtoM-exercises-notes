const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('error found');
	}
	console.log('Async', data.toString('utf8')); // toString encodes using utf8
});

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// WRITE
// fs.writeFile('bye.txt', 'tootle loo to you', (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// DELETE
fs.unlink('./bye.txt', (err) => {
	if (err) {
		console.log(err);
	}
	console.log('inception, bye to bye.txt');
});
