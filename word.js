var Letter = require('./Letter');
var inquirer = require('inquirer');
var int = 0;

//corect guesses
//incorrect guesses
//finish word



var Word = function(w) {
	this.chosenWordArray = w.split('');
	this.words = [];
	this.correctGuess = 0;

	//Loop through chosenword array
	for (var i = 0; i < this.chosenWordArray.length; i++) {
		//create object with each letter in chosen word
		this.words.push(new Letter(this.chosenWordArray[i]));
		
	}


	//check if correct guess
	this.checkCharacters = function(c) {
		console.log(this.chosenWordArray);

		this.character = c;


		if (this.chosenWordArray.indexOf(this.character) > -1) {
		
			for (var i = 0; i < this.chosenWordArray.length; i++) {

				if (this.words[i].letter === this.character) {

					//this.words[i] = this.character;

					this.words[i].display = true;

					console.log(this.words[i]);

					this.correctGuess++;

					
				}

			}
			
		}
		else {
			console.log("you suck");
		}
	}

	this.showWords = function() {
		var output = "";

		for(var i=0; i<this.words.length; i++){

	    output += this.words[i].letterDisplay();

	  	}
	  	console.log(output);
	}



}

var mine = new Word('todoy');
promptLetters();

function promptLetters() {
	if (int < 5) {

		inquirer.prompt([
			{type : "input",
			name: "pickLetter",
			message: "Choose a Letter: "
			}
		])
		.then(function(guess) {
			
			console.log(guess.pickLetter);


		mine.checkCharacters(guess.pickLetter);
		mine.showWords();
		
		int++;
		promptLetters();

		});
	}
	else {
		return;
	}


}



module.exports = Word;
