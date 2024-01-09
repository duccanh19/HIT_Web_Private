// Mảng số nguyên dương chứa tuổi của mèo
const catAges = [1, 3, 4, 2, 5, 6, 1, 2, 3, 4, 2, 7];

// Tìm mảng mới chứa tuổi của chủ nhân của các con mèo
const ownerAges = catAges.map((age) => {
    if (age <= 2) {
        return age * 2;
    } else {
        return age * 4 + 16;
    }
});

// Tìm mảng mới chứa tuổi của người lớn (>= 18 tuổi)
const adultAges = ownerAges.filter((age) => age >= 18);

// Tính trung bình cộng tuổi của người lớn
const averageAge = adultAges.reduce((sum, age) => sum + age, 0) / adultAges.length;

console.log('Mảng tuổi của chủ nhân:', ownerAges);
console.log('Mảng tuổi của người lớn:', adultAges);
console.log('Trung bình cộng tuổi của người lớn:', averageAge);
