var Word = require('./Word');
var inquirer = require('inquirer');

var wordList = ["today", "hello", "favorite", "minnesota", "curling"];

var newWord = "";
var min = {};

var guesses = 12;
console.log(wordList.length);

chooseWord();
promptLetters();


function chooseWord() {

	newWord = wordList[Math.floor(Math.random() * wordList.length)];

	mine = new Word(newWord);
}

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
				console.log("You have " + guesses + " guesses left" + "\n");
				if (guesses === 0) {
					console.log("You are out of guesses. Relaunch Game to Play Again");
				}
				else {



					mine.checkCharacters(guess.pickLetter);
					if (mine.duplicate(guess.pickLetter) === false) {
						console.log("Already Guessed")
						guesses++;
					}
					//mine.showWords();
					promptLetters();
				}

			});
		
	}	
	else {
		console.log("YOU WIN!!!!!!!!!!!!" + "\n");
		chooseWord();
		guesses = 12;
		promptLetters();

	}


}
