
describe('wordCounter', function(){
  var wordCounter;

  beforeEach(function(){
    wordCounter = new WordCounter("Once upon a time, there was a dog called Otto.");
  });

  describe('initialize', function(){
    it('initializes with parameter in string format', function(){
      expect(wordCounter.text).toEqual('Once upon a time, there was a dog called Otto.');
    });
  });

  describe('replaceSpecialCharacters', function(){
    it('replaces all characters and whitespace except for letters', function(){
      wordCounter.replaceSpecialCharacters();
      expect(wordCounter.text).toEqual('Once upon a time there was a dog called Otto');
    });
  });

  describe('convertToLowerCase', function(){
    it('converts text string to lowercase', function(){
      wordCounter.convertToLowerCase();
      expect(wordCounter.text).toEqual('once upon a time, there was a dog called otto.');
    });
  });

  describe('splitTextIntoWords', function(){
    it('splits string into separate words and stores in in array', function(){
      wordCounter.replaceSpecialCharacters();
      wordCounter.splitTextIntoWords();
      expect(wordCounter.words).toEqual(["Once", "upon", "a", "time", "there", "was", "a", "dog", "called", "Otto"]);
    });
  });

  describe('countOccurances', function(){
    it('counts occurences for each word and creates an object', function(){
      wordCounter.replaceSpecialCharacters();
      wordCounter.convertToLowerCase();
      wordCounter.splitTextIntoWords();
      wordCounter.countOccurances();
      expect(wordCounter.wordCount).toEqual({"once" : 1, "upon" : 1, "a" : 2, "time" : 1, "there" : 1, "was" : 1, "dog" : 1, "called" : 1, "otto" : 1});
    });
  });


  describe('storePrimeNumbers', function() {
    it('checks prime numbers are stored', function() {
      wordCounter.storePrimeNumbers();
      expect(wordCounter.primeNumbers).toContain(2, 3, 5, 7, 31, 73, 11, 47, 97);
    });
  });
});
