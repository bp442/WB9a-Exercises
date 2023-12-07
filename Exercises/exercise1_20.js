"use strict";

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }

    getGrossPay(hoursWorked){
        return this.payRate * hoursWorked;
    }
}

let randomPerson = new Person("Jim", "Bob");

console.log(randomPerson.getFullName());

let randomEmployee1 = new Employee("Joe", "Johnson", 1, "Couch Potato", 0.2);
let randomEmployee2 = new Employee("Josh", "Daniels", 2, "Professional Slacker", 1);

console.log("\nEmployee 1's full name is " + randomEmployee1.getFullName() + 
", and his gross pay for 5 hours of work is $" + randomEmployee1.getGrossPay(5));
console.log("Employee 2's full name is " + randomEmployee2.getFullName() +
", and his gross pay for 5 hours of work is $" + randomEmployee2.getGrossPay(5));