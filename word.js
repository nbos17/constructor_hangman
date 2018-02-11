var Letter = require('./Letter');

var Word = function(w) {
	this.myWord = w.split('');
	console.log(this.myWord);
	this.words = [];
	this.blankWords = function() {
		for (var i = 0; i < this.myWord.length; i++) {
		var newWord = new Letter(this.myWord[i]);
		this.words.push(newWord.letterDisplay());

	}
	console.log(this.words);


}




}

var mine = new Word('today');
mine.blankWords();
