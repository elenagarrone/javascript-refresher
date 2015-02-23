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
    firstLetter = array[i].charAt(0)
    if ('aeiou'.indexOf(firstLetter) > -1){ newArray.push(array[i]) }
  }
  return newArray;
};

// Question 3

function removeNullsFromArray(array) {
  var isNotNull = function(el){
    return el !== null
  }
  var newArray = array.filter(isNotNull)
  return newArray;
};

// Question 4

function removeNullsAndFalseFromArray(array) {

};

// Question 5

function reverseEveryElementInArray(array) {

};

// Question 6

function dropFirstThreeElements(array) {

};

// Question 7

function addElementToBeginningOfArray(array, element) {

};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {

};

// Question 9

function returnFirstHalfOfString(string) {

};

// Question 10

function makeNumberNegative(number) {
  
};