var Word = require('./Word');
var inquirer = require('inquirer');

var wordList = ["today", "hello", "favorite"];

var newWord = wordList[Math.floor(Math.random() * wordList.length)];

var mine = new Word(newWord);
console.log(mine);
var guesses = 12;
promptLetters();

function promptLetters() {
	if (mine.isWordComplete() === false) {
			mine.showWords();

			inquirer.prompt([
				{type : "input",
				name: "pickLetter",
				message: "Choose a Letter: "
				}
			])
			.then(function(guess) {
				
				console.log(guess.pickLetter);
				guesses--;
				console.log("You have " + guesses + " left");



				mine.checkCharacters(guess.pickLetter);
				if (mine.duplicate(guess.pickLetter) === false) {
					console.log("already Guessed")
				}
				//mine.showWords();
				promptLetters();

			});
		
	}	
	else {
		console.log("YOU WIN");
	}


}
