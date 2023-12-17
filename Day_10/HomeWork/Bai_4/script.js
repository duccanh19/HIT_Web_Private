generatePascalTriangle = (n) => {
    const triangle = [];

    for (let i = 0; i < n; i++) {
        const row = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                const prevRow = triangle[i - 1];
                const num = prevRow[j - 1] + prevRow[j];
                row.push(num);
            }
        }

        triangle.push(row);
    }

    return triangle;
};
console.log(generatePascalTriangle(5));
console.log(generatePascalTriangle(1));
