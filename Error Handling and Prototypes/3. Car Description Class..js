class car {
    company="Skoda";
    model="Rapid";
    year=2022;
    getDescription= function (){
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}
let myCar=new car()
console.log(myCar.getDescription()); //This is a 2022 Skoda Rapid
