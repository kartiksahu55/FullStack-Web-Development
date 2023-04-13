class Employee {
    name = "Rahul"
    position = "SDE-1";
    salary = 80000;
    getSalary = function () {
        return this.salary
    }
}

let employee1 = new Employee()
console.log(employee1.getSalary());