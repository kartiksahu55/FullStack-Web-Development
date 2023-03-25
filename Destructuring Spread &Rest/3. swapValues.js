const x = 5;
const y = 10;

function swapValue(x, y) {
    [ x, y]  = [ y, x] ;
    return [x,y]
}

console.log(swapValue(x, y));