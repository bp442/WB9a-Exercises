"use strict";

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    promote(newTitle, newPay) {
        this.jobTitle = newTitle;
        this.payRate = newPay;
    }

    getIntro() {
        let intro =
            "Hi! I'm " + this.getFullName() + " and I am a " +
            this.jobTitle;
        return intro;
    }

}

let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
    let intro = employee1.getIntro();
    console.log(intro);

let employee2 = new Employee(
    2, "Jim", "Bob", "Couch Potato", 0.50);
    let intro2 = employee2.getIntro();
    console.log(intro2);

employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`\nJob title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

employee2.promote("Chore Doer", 5.00);
console.log(`\nJob title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);