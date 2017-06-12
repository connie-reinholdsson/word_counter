
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
});
