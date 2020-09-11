"use strict";

var arr = [1, 23, 4, 3, 2, 3, 1, 2, 21, 34, 23, 2, 21, 1, 32, 4, 12, 3214, 6, 4];

function teste(i, j) {
  return i + j;
}

var newArr = arr.map(function (item, index) {
  return teste(item, index);
});
console.log(newArr); // valor padrão

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2));
