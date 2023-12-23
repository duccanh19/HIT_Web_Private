const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array1.reduce((accumulator, currentValue) => Math.abs(accumulator , currentValue), initialValue);

console.log(sumWithInitial);
