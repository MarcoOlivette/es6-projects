const arr = [1, 23, 4, 3, 2, 3, 1, 2, 21, 34, 23, 2, 21, 1, 32, 4, 12, 3214, 6, 4];

let newArr = arr.map(
    (item, index) => item + index
);

console.log(newArr);

newArr = arr.reduce(
    (total, next) => total + next
);

console.log(newArr);

newArr = arr.filter(
    item => item % 2 == 0
);

console.log(newArr);

newArr = arr.filter(
    item => item % 2 == 1
);

console.log(newArr);

newArr = arr.find(
    item => item === 1
);

console.log(newArr);