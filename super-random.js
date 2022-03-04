console.log('generateRandomArrayFromArrayone(min, max) genera i numeri random molto più velocemente');
console.log('generateRandomArrayFromScratch(min, max) genera i numeri random mooooolto più lentamente');
console.log('Già con un intervallo (1, 100000) ci vuole qualche minuto ad ottenere il risultato');

function generateRandomArrayFromArrayone(min, max) {
	const arrayone = getArrayone(min, max)
	const randomArray = [];

	const start = Date.now();
	while (arrayone.length > 0) {
		randomIndex = getRandomInteger(0, arrayone.length - 1);
		randomArray.push(arrayone[randomIndex]);
		arrayone.splice(randomIndex, 1);
	}
	console.log('Tempo esecuzione secondi:', (Date.now() - start) / 1000);

	return randomArray;
}

function generateRandomArrayFromScratch(min, max) {
	const arrRandom = [];

	const start = Date.now();
	for (let i = 0; i < max; i++) {
		let randomNumber;
		do {
			randomNumber = getRandomInteger(min, max);
		} while (arrRandom.includes(randomNumber))
		arrRandom.push(randomNumber);
	}
	console.log('Tempo esecuzione secondi:', (Date.now() - start) / 1000);

	return arrRandom;
}

function getArrayone(min, max) {
	const arrayone = [];
	for (let i = min; i <= max; i++) {
		arrayone.push(i);
	}
	console.log(arrayone);
	return arrayone;
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
