const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Tính lượng thức ăn được recommended và lưu vào thuộc tính recFood cho từng chú chó
console.log('Mảng sau khi thêm lượng thức ăn recommended');
dogs.forEach((dog) => {
    dog.recFood = dog.weight ** 0.75 * 28;
    console.log(dog);
});



// Tìm chú chó của Sarah và kiểm tra xem nó ăn quá nhiều hay quá ít
const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
if (sarahDog) {
    if (sarahDog.curFood > sarahDog.recFood) {
        console.log('Chó của Sarah ăn quá nhiều');
    } else if (sarahDog.curFood < sarahDog.recFood) {
        console.log('Chó của Sarah ăn quá ít');
    }
}

// Tạo mảng chứa chủ nhân của những chú chó ăn quá nhiều và ăn quá ít
const a = dogs.flatMap((dog) => dog.owners);
console.log(a);
const ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recFood).flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recFood).flatMap((dog) => dog.owners);

// In ra thông báo về chủ nhân của những chú chó ăn quá nhiều và ăn quá ít
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Kiểm tra xem có chú chó nào ăn chính xác lượng thức ăn được recommended hay không
const isExactFood = dogs.every((dog) => dog.curFood === dog.recFood);
console.log(`Có chó ăn chính xác lượng thức ăn được recommended: ${isExactFood}`);

// Kiểm tra xem có chú chó nào ăn đủ lượng thức ăn hay không
const isEnoughFood = dogs.some((dog) => dog.curFood >= 0.9 * dog.recFood && dog.curFood <= 1.1 * dog.recFood);
console.log(`Có chó ăn đủ lượng thức ăn: ${isEnoughFood}`);

// Tạo mảng chứa những chú chó ăn đủ lượng thức ăn
const dogsEatEnough = dogs
    .filter((dog) => dog.curFood >= 0.9 * dog.recFood && dog.curFood <= 1.1 * dog.recFood)
    .flatMap((dog) => dog.owners);
console.log(
    'Những chú chó của chủ sau ăn đủ lượng thức ăn:',
    dogsEatEnough,
    ' Cụ thể: ',
    dogs.filter((dog) => dog.curFood >= 0.9 * dog.recFood && dog.curFood <= 1.1 * dog.recFood),
); 

// Tạo mảng shallow copy từ mảng ban đầu và sắp xếp tăng dần theo lượng thức ăn recommended
const array1 = [1, 30, 4, 21, 100000];
console.log(
    'Test sort: ',
    array1.sort((a, b) => a - b),
);

const sortedDogs = [...dogs].sort((a, b) => a.recFood - b.recFood);

console.log('Mảng chó sắp xếp theo lượng thức ăn recommended:', sortedDogs);
