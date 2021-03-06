// ES5 Map Callback

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// My refactored version
const double = arr => arr.map(val => val * 2);
console.log(double([1,2,3,4]));

// Another function I need to convert

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }
  
// My refactored version
const squareAndFindEvens = numbers => numbers
.map(num => num ** 2)
.filter(square => square % 2 === 0);

console.log(squareAndFindEvens([1,2,3,4,5]));
  