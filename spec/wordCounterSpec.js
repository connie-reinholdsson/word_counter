
describe('wordCounter', function(){
  var wordCounter;

  beforeEach(function(){
    wordCounter = new WordCounter("Once upon a time, there was a dog called Otto.");
  });

  describe('initialize', function(){
    it('initializes with parameter in string format', function(){
      expect(wordCounter.text).toEqual('Once upon a time, there was a dog called Otto.')
    });
  });
});
