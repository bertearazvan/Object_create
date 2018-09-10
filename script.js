"use strict";

const names = [
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Neville Longbottom",
  "Luna Lovegood",
  "Cho Chang",
  "Justin Finch-Fletchly",
  "Draco Malfoy"
];

const Student = {
  firstName: "",
  lastName: "",
  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitNames(fullName) {
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};

const houses = {
  Gryffindor: "Gryffindor",
  Hufflepuff: "Hufflepuff",
  Ravenclaw: "Ravenclaw",
  Slytherin: "Slytherin"
};

const students = [];

function createStudents() {
  names.forEach(function(student) {
    console.log(student);
    const newName = Object.create(Student);
    newName.splitNames(student);

    const randomHouse = Object.keys(houses)[
      Math.floor(Math.random()) * Object.keys(houses).length
    ];
    newName.house = randomHouse;
    students.push(newName);
  });
}

createStudents();

console.table(students);
