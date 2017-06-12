
function WordCounter(text){
  this.text = text;
  this.words = [];
}

WordCounter.prototype.replaceSpecialCharacters = function() {
  this.text = this.text.replace(/(\r\n|\n|\r)/gm," ");
  this.text = this.text.replace(/[^a-z\d\s]+/gi,'');
};

WordCounter.prototype.convertToLowerCase = function() {
  this.text = this.text.toLowerCase();
};

WordCounter.prototype.splitTextIntoWords = function() {
  this.words = this.text.split(' ');
};

var fs = require('fs');
fs.readFile('book.txt', 'utf8', function(err, data) {
  if(err) throw err;

var wordCounter = new WordCounter(data);
wordCounter.replaceSpecialCharacters();
wordCounter.convertToLowerCase();
});
