const nums = [1, 2, 2, 4];

const findErrNums = (nums) => {
  nums.sort((a, b) => a - b);
  let duplicate = -1;
  let missing = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      duplicate = nums[i];
    } else if (nums[i] > nums[i - 1] + 1) {
      missing = nums[i - 1] + 1;
    }
  }

  if (nums[nums.length - 1] !== nums.length) {
    missing = nums.length;
  }

  return [duplicate, missing];
}

const result = findErrNums(nums);
console.log(result);
