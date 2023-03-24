const numbers = [50, 6, 20, 3, 45, 69, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 !== 0 || numbers[i] % 2 == 0) {
        continue;
    }
    console.log(numbers[i]+" is divisible by 3, but not by 2.");
}