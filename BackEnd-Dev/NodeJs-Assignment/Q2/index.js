const fs = require("fs")

const data="NodeJS is a single-threaded and asynchronous runtime environment used to run server-side applications with JavaScript as its primary language. NodeJS offers a robust architecture that provides seamless operation to run server-side code."

fs.writeFile("nodejs_architecture.txt", data, (err)=>{
    if(err){
        console.log("Error in writing to file");
    }else{
        console.log("Success in writing to file");
    }
})