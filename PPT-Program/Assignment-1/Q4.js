const digits = [1, 2, 3];

const plusOne = (digits) => {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

const result = plusOne(digits);
console.log(result);

