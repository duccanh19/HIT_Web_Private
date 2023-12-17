function moveZeros(nums) {
  let count = 0; 

  // Duyệt qua mảng, di chuyển các số khác 0 về đầu mảng
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  // Đặt các số 0 vào cuối mảng
  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12])); 
console.log(moveZeros([0]));