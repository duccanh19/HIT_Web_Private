check_triangle = (a, b, c) => {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && b + c > a && c + a > b) {
            return true;
        }
    }
    return false;
};

const a1 = 3;
const b1 = 4;
const c1 = 5;

const a2 = 3;
const b2 = 4;
const c2 = 8;

console.log(check_triangle(a1, b1, c1));
console.log(check_triangle(a2, b2, c2));
