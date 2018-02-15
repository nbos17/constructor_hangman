var Letter = require('./Letter');
var inquirer = require('inquirer');


var Word = function(w) {
	this.chosenWordArray = w.split('');
	this.words = [];
	this.correctGuess = 0;
	this.lettersGuessed = [];

	//Loop through chosenword array
	for (var i = 0; i < this.chosenWordArray.length; i++) {
		//create object with each letter in chosen word
		this.words.push(new Letter(this.chosenWordArray[i]));
		
	}

	//checks if word is complete
	this.isWordComplete = function() {
		for (var i = 0; i < this.words.length; i++) {
			if(!this.words[i].display) return false;
			}
			return true;
	}


	//check if correct guess
	this.checkCharacters = function(c) {

		this.character = c;

		if (this.chosenWordArray.indexOf(this.character) > -1) {
		
			for (var i = 0; i < this.chosenWordArray.length; i++) {

				if (this.words[i].letter === this.character) {


					this.words[i].display = true;

				}

			}
			
		}
		else {
			console.log("Incorrect Guess" + "\n");
		}
	}

	this.showWords = function() {
		var output = "";

		for(var i=0; i<this.words.length; i++){

	    output += this.words[i].letterDisplay();

	  	}
	  	console.log(output + "\n");
	}

	this.duplicate = function(c) {
		this.character = c;
		if (this.lettersGuessed.indexOf(this.character) != -1) {
			//console.log("not working");
			return false;
			
		}
		else {
		
		this.lettersGuessed.push(this.character);
		//console.log("this maybe working");
		}
		
		
	}



}




module.exports = Word;
