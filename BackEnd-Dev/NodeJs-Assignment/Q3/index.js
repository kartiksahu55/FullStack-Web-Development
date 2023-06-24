const fs = require("fs")

fs.readFile("nodejs_architecture.txt", (err, data)=>{
    if(err){
        console.log("Error in Reading file");
    }else{
        console.log("Data:",data.toString())
    }
})