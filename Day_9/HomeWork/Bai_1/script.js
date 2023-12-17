// max_number = (a, b, c) => {
//     let max = a > b ? a : b;
//     max = c > max ? c : max;

//     return max;
// };

// const a = 1;
// const b = 2;
// const c = 3;

// console.log('Số lớn nhất là:', max_number(a, b, c));


function findFirstUniqueCharIndex(str) {
    const charCount = new Map();
  
    // Đếm số lần xuất hiện của từng kí tự trong chuỗi
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) + 1);
      } else {
        charCount.set(char, 1);
      }
    }
  
    // Tìm kí tự đầu tiên có số lần xuất hiện là 1 và trả về chỉ số index
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount.get(char) === 1) {
        return i;
      }
    }
  
    // Không có kí tự không lặp lại, trả về -1
    return -1;
  }
  
  // Sử dụng ví dụ:
  const inputString = "aabb";
  const resultIndex = findFirstUniqueCharIndex(inputString);
  console.log(resultIndex); // Kết quả: 3 (chỉ số index của kí tự 'a')