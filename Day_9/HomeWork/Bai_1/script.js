max_number = (a, b, c) => {
    let max = a > b ? a : b;
    max = c > max ? c : max;

    return max;
};

const a = 1;
const b = 2;
const c = 3;

console.log('Số lớn nhất là:', max_number(a, b, c));
