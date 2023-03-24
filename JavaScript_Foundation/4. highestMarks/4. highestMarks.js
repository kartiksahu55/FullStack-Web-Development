const marks = [54, 94, 46, 89, 37];
const highestMark = marks.length > 0 ? Math.max(...marks) : null; //Here ... is a spread Operator.

if (highestMark!=null){
    console.log(`The highest mark scored by a student in the class is ${highestMark}.`);
}
else{console.log("No marks found");}