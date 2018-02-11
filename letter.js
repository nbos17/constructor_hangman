var Letter = function (letter) {
	this.letter = letter;
	this.display = false;
	this.letterDisplay = function() {
		//console.log('hi');
		if (this.display === false) {
			return "__ ";
		}
		else {
			console.log(this.letter);
		}
	}
}


module.exports = Letter;

