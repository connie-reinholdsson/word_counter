
function WordCounter(text){
  this.text = text;
}

WordCounter.prototype.replaceSpecialCharacters = function() {
  this.text = this.text.replace(/(\r\n|\n|\r)/gm," ");
  this.text = this.text.replace(/[^a-z\d\s]+/gi,'');
};

var fs = require('fs');
fs.readFile('book.txt', 'utf8', function(err, data) {
  if(err) throw err;

var wordCounter = new WordCounter(data);
});
