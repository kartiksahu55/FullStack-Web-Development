const nums = [2, 7, 11, 15];
const target = 9;

const findTarget = (nums, target) => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const values = target - nums[i];

    if (numMap.has(values)) {
      return [numMap.get(values), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
};

console.log(findTarget(nums, target));
