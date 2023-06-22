const merge = (nums1, m, nums2, n) => {
  let i = 0; // Pointer for nums1
  let j = 0; // Pointer for nums2
  const merged = [];

  for (let k = 0; k < m + n; k++) {
    if (i >= m) {
      merged[k] = nums2[j];
      j++;
    } else if (j >= n) {
      merged[k] = nums1[i];
      i++;
    } else if (nums1[i] <= nums2[j]) {
      merged[k] = nums1[i];
      i++;
    } else {
      merged[k] = nums2[j];
      j++;
    }
  }

  for (let k = 0; k < merged.length; k++) {
    nums1[k] = merged[k];
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
