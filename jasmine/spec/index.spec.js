'use strict';
describe('Checkpoint Testing', () => {
  it('tests if a string has a vowel', () => {
    var testValue = 'Hello';
    expect(testValue.hasVowels()).toBeTruthy();
  });

  it('converts a given string in all lower case to upper case', () => {
    var testValue = 'hello';
    expect(testValue.toUpper()).toBe('HELLO');
  });

  it('converts a given string in all upper case to lower case', () => {
    var testValue = 'HELLO';
    expect(testValue.toLower()).toBe('hello');
  });

  it('capitalizes the first letter of a given word', () => {
    var testValue = 'hello';
    expect(testValue.ucFirst()).toBe('Hello');
  });

  it('checks if the given string is a question', () => {
    var testValue = '?';
    expect(testValue.isQuestion()).toBeTruthy();
  });

  it('returns the list of words in the string', () => {
    var testValue = 'This is a sentence';
    expect(testValue.in()).toEqual(['This', 'is', 'a', 'sentence']);
  });

  it('returns the number of words in a string', () => {
    var testValue = 'This is another sentence';
    expect(testValue.wordCount()).toBe(4);
  });

  it('checks if a given letter is a capital letter', () => {
    var testValue = 'A';
    expect(testValue.isCapitalLetter()).toBeTruthy();
  });

  it('checks if a given letter is a small letter', () => {
    var testValue = 'a';
    expect(testValue.isSmallLetter()).toBeTruthy();
  });

  it('returns the inverse case of the given string', () => {
    var testValue = 'aBaBaB'
    expect(testValue.inverseCase()).toBe('AbAbAb');
  });

  it('returns the string with alternating character cases', () => {
    var testValue = 'abcdef';
    expect(testValue.alternatingCase()).toBe('aBcDeF');
  });

  it('returns the character in the middle of the given string of add number length', () => {
    var testValue = 'inthemiddle';
    expect(testValue.getMiddle()).toBe('m');
  });

  it('returns the characters in the middle of the give string', () => {
    var testValue = 'Davidson';
    expect(testValue.getMiddle()).toBe('id');
  });

  it('returns the numbers in the strings in word form', () => {
    var testValue = '345';
    expect(testValue.numberWords()).toEqual('three four five');
  });

  it('checks if an input is a single digit', () => {
    var testValue = '3';
    expect(testValue.isDigit()).toBeTruthy();
  });

  it('converts a string to currency form', () => {
    var testValue = '123456789.111';
    expect(testValue.toCurrency()).toEqual('123,456,789.111');
  });

  it('converts a string in currency form to string form', () => {
    var testValue = '123,456,789.111';
    expect(testValue.fromCurrency()).toEqual('123456789.111');
  });
});