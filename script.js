const q = ele => document.querySelector(ele);


// gameBoard module?
const gameBoard = (function () {
	// Storing x's and o's here
	const board = ['x', 'o', 'x',
								 'o', 'x', 'o',
								 'x', 'o', 'x'];
	const clearButton = q('#clear-btn');
	const startButton = q('#start-btn');
	const tiles = document.querySelectorAll('.tile');
	let playerMark = 'x';
	
	// This lets me start with 'x' and then change to 'o' and then continue back and forth
	tiles.forEach((tile) => {
		tile.addEventListener('click', (e) => {
			if (tile.innerHTML !== 'x') {
				playerMark = 'x';
			}else playerMark = 'o';

			tile.innerHTML = playerMark;
		});
	});

	// Start game
	startButton.addEventListener('click', () => {
		let playerName = prompt('Please enter your name');
		console.log(playerName);
	})

	// Clear board
	clearButton.addEventListener('click', () => {
		tiles.forEach((tile) => {
				if (tile.innerHTML != '') {
					tile.innerHTML = '';
				}
			});
	});

	var _privateFunction = function () {
		/* 	this is a private function. Only stuff in here can access it
		 		...which I believe means that I can only call it from within gameBoard */
		console.log('You have invoked a private function');
	}

	return {
		poop: function () {
			//this is a public function. Things outside of gameBoard can access it.
			alert('You have invoked a public function');
		}
	}
})();

const player = () => {
	
}