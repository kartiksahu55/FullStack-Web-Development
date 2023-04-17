const intArray = [1, 2, 3, 4, 5];

function callDouble(arr, fn) {
    console.log(fn(arr));
};

callDouble(intArray, function fn(arr) {
    let doubledArr = [];
    return doubledArr = arr.map(el => el * 2);
});