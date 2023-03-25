const numbers = [5, 2, 7, 1, 9];

function minMax(numbers) {
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return {max, min};
};

console.log(minMax(numbers));
