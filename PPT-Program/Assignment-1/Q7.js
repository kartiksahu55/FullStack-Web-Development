const moveZeroes = (nums) => {
  let left = 0;
  let right = 0;

  for (right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }

  for (left; left < nums.length; left++) {
    nums[left] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
