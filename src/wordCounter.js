
function WordCounter(text){
  this.text = text;
  this.words = [];
  this.wordCount = {};
  this.primeNumbers = [];
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

WordCounter.prototype.countOccurances = function() {
  for(var i in this.words) {
    if (this.wordCount[this.words[i]] !== undefined) {
          this.wordCount[this.words[i]] += 1;
        }
        else {
          this.wordCount[this.words[i]] = 1;
        }
    }
};

WordCounter.prototype.storePrimeNumbers = function() {
  for(var i = 1; i <= 100 ; i++) {
          var isPrime = true;
          for(var j = 2; j < i; j++) {
              if(i % j === 0){
                  isPrime = false;
              }
          }
          if(isPrime === true){
              this.primeNumbers.push(i);
          }
      }
};

WordCounter.prototype.printOutput = function() {
  for (var i in this.wordCount) {
    if (this.primeNumbers.includes(this.wordCount[i])) {
      console.log(i, this.wordCount[i] + " PRIME");
    }
    else {
      console.log(i, this.wordCount[i] + " NOT PRIME");
    }
  }
};

var fs = require('fs');
fs.readFile('book.txt', 'utf8', function(err, data) {
  if(err) throw err;

var wordCounter = new WordCounter(data);
wordCounter.replaceSpecialCharacters();
wordCounter.convertToLowerCase();
wordCounter.splitTextIntoWords();
wordCounter.countOccurances();
wordCounter.printOutput();
});
