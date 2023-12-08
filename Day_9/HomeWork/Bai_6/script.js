timUCLN = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

timBCNN = (a, b) => {
    let ucln = timUCLN(a, b);
    let bcnn = (a * b) / ucln;
    return bcnn;
};

const a = 10;
const b = 20;

console.log(timUCLN(a, b), timBCNN(a, b));
