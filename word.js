var Letter = require('./Letter');

var Word = function(w, char) {
	this.chosenWordArray = w.split('');
	this.words = [];
	this.character = char;

	// create blanks for word
	this.blankWords = function() {
		//Loop through chosenword array
		for (var i = 0; i < this.chosenWordArray.length; i++) {
			//create object with each letter in chosen word
			var newWord = new Letter(this.chosenWordArray[i]);
			// creates the blanks for letters to be guessed and stores them in array
			this.words.push(newWord.letterDisplay());
		}
	console.log(this.words.join(' '));

	}

	//check if correct guess
	this.checkCharacters = function() {
		console.log(this.chosenWordArray);
		console.log(this.character);
		if (this.chosenWordArray.indexOf(this.character) > -1) {
		console.log("Winner winner chicken dinner");
			for (var i = 0; i < this.chosenWordArray.length; i++) {
				if (this.chosenWordArray[i] === this.character) {
					this.words[i] = this.character;
					console.log(this.words.join(' '));
				}


				// var newWord = new Letter(this.chosenWordArray[i]);
				// newWord.display = true;
				// newWord.letterDisplay();
				// console.log(newWord);
			}
		}
		else {
			console.log("you suck");
		}
	}

}

var mine = new Word('today', "t");
mine.blankWords();
mine.checkCharacters();
