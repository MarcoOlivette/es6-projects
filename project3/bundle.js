"use strict";

var arr = [1, 23, 4, 3, 2, 3, 1, 2, 21, 34, 23, 2, 21, 1, 32, 4, 12, 3214, 6, 4];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
newArr = arr.reduce(function (total, next) {
  return total + next;
});
console.log(newArr);
newArr = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log(newArr);
newArr = arr.filter(function (item) {
  return item % 2 == 1;
});
console.log(newArr);
newArr = arr.find(function (item) {
  return item === 1;
});
console.log(newArr);
