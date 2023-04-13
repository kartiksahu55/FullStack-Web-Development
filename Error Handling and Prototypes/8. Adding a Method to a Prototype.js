function Student (name){
    this.name=name;
}

Object.prototype.printDetails= function(){
    console.log(`Hello, my name is ${this.name}`);
}

const student= new Student("Mithun");
student.printDetails();