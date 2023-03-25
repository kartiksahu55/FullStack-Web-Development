const numbers=[1,2,3,4,5,6,7];
function extractNum(numbers){
    [first,second,...remove]=numbers;
    const last=numbers[(numbers.length)-1];
    return [first,second,last];
};

console.log(extractNum(numbers));
