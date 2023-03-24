const color1 = "yellow";
const color2 = "blue";

switch (color1) {
    case "red":
        switch (color2) {
            case "blue": console.log("Purple"); break;
            case "yellow": console.log("Orange"); break;
            default: console.log("Invalid color combination"); break;
        } break;

    case "blue":
        switch (color2) {
            case "yellow": console.log("Green"); break;
            case "red": console.log("Purple"); break;
            default: console.log("Invalid color combination"); break;
        } break;

    case "yellow":
        switch (color2){
            case "red": console.log("Orange"); break;
            case "blue": console.log("Green"); break;
            default: console.log("Invalid color combination"); break;
        } break;
    
        default: console.log("Invalid color combination"); break;

}

