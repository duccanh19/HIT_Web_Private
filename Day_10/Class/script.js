var a = 1;
console.log(typeof a);
let b = +a;
let c = 'aaaaa';
let d = +c;
console.log(typeof d);
console.log(typeof c);
console.log(typeof b);


console.log("--------------------------");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); //Kết quả: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

