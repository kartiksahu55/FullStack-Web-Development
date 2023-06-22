const containsDuplicate = (nums) => {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    }
    numSet.add(nums[i]);
  }

  return false;
};

const nums = [1, 2, 3, 1];
const hasDuplicates = containsDuplicate(nums);
console.log(hasDuplicates);
