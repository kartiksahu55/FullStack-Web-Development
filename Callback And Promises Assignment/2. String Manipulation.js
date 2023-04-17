function manipulateString(string, logString){
    console.log(`The manipulated string is: ${logString(string)}`);
};

manipulateString("hello, world!", logString);

function logString(string){
    return string.toUpperCase();
};