plusOne = (digits) => {
    const n = digits.length;

    // Duyệt từ phải sang trái
    for (let i = n - 1; i >= 0; i--) {
        // Tăng giá trị của chữ số hiện tại lên 1
        digits[i]++;

        // Nếu chữ số hiện tại lớn hơn 9, đặt nó về 0 và tiếp tục vòng lặp
        if (digits[i] > 9) {
            digits[i] = 0;
        }
        // Ngược lại, nếu chữ số hiện tại nhỏ hơn hoặc bằng 9, không cần tiếp tục vòng lặp
        else {
            break;
        }
    }

    // Nếu chữ số đầu tiên là 0, thêm 1 vào đầu mảng
    if (digits[0] === 0) {
        digits.unshift(1);
    }

    return digits;
};

// Kiểm tra kết quả với các ví dụ
console.log(plusOne([1, 2, 3, 4])); // [1, 2, 3, 5]
console.log(plusOne([9, 9, 9, 9])); // [1, 0, 0, 0, 0]
