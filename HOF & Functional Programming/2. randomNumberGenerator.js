const delay=3;
console.log(`Random number will be generate after ${delay} Second`);

for(let i=0; i<=delay; i++){
    setTimeout(()=>{
    console.log(`Time remaing ${delay-i}s`);
    if(delay===i){
        const randomNum=Math.floor(Math.random()*1000)
        console.log(`Generated Random number is ${randomNum}`);
    }
},i*1000)
}