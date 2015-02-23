// Question 1

function selectElementsStartingWithE(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++){
    if (array[i].charAt(0) === 'e'){ newArray.push(array[i]) }
  }
  return newArray;
};

// Question 2

function selectElementsStartingWithVowel(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++){
    firstLetter = array[i].charAt(0);
    if ('aeiou'.indexOf(firstLetter) > -1){ newArray.push(array[i]) }
  }
  return newArray;
};

// Question 3

function removeNullsFromArray(array) {
  var isNotNull = function(el){
    return el !== null;
  }
  var newArray = array.filter(isNotNull);
  return newArray;
};

// Question 4

function removeNullsAndFalseFromArray(array) {
  var isNotNullAndFalse = function(el){
    return el !== null && el !== false;
  }
  var newArray = array.filter(isNotNullAndFalse);
  return newArray;
};

// Question 5

function reverseEveryElementInArray(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++){
    var reversedElement = array[i].split('').reverse().join('');
    newArray.push(reversedElement);
  }
  return newArray;
};

// Question 6

function dropFirstThreeElements(array) {
  var newArray = array.slice(3);
  return newArray;
};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
  array.sort(function(a, b){
    var aLastLetter = a.slice(-1);
    var bLastLetter = b.slice(-1);
    return aLastLetter < bLastLetter ? -1 : aLastLetter > bLastLetter ? 1 : 0
  })
  return array;
};

// Question 9

function returnFirstHalfOfString(string) {
  var middle = Math.floor(Math.round(string.length / 2));
  var string = string.slice(0, middle);
  return string;
};

// Question 10

function makeNumberNegative(number) {
  number = -Math.abs(number);
  return number;
};

// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
  var both = [], odd = [], even = [];
  for(i = 0; i < array.length; i++){
    array[i] % 2 === 0 ? even.push(array[i]) : odd.push(array[i])  
  }
  both.push(even, odd);
  return both;
};

// Question 12

function numberOfElementsThatArePalindromes(array) {

};

// Question 13

function shortestWordInArray(array) {

};

// Question 14

function longestWordInArray(array) {

};

// Question 15

function arrayTotal(array) {

};

// Question 16

function doubleArray(array) {

};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {

};

// Question 20

function getLettersInArrayOfWords(array) {

};