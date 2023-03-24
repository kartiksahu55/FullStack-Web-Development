//Enter two Numbers to perform mathmatical Operation
let num1=5;  
let num2=2;

// Select the Operator
let mathOperator="*";

let Result;
switch (mathOperator) {
    case "+":
        Result=num1+num2;
        break;

    case "-":
        Result=(num1-num2);
        break;

    case "*":
        Result=num1*num2;
        break;

    case "/":
        Result=num1/num2;
        break;

    default: Result="Invalid operator!";
        break;
}

console.log(`Result= ${Result}`);