const nums = [3, 2, 2, 3];
const val = 3;

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const count = removeElement(nums, val);
console.log(count);
console.log(nums.slice(0, count));