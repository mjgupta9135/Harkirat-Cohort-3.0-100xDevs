/**
 * ! Classes in JS
 * * In Js classes are a way to define blueprints for creating  object(These objects are different from the objects defined in the last section).
 * ! Key Concepts
 * * 1. Class Declaration:- We declare a class using class keyword.
 *      Inside a class we define the properties(variables) and methods(functions that will belong to the objects created from this class)
 * * 2. Constructor:- It is a function that is used to intialized the object during object creation time.Intantiate the object during object creation.
 * * 3. Methods:- Functions that are defined inside the class and can be used by all instances of class.
 * * 4. Inheritance:- Classes can inherit properties and methods from other classes allowing you to create a new classes based on an exisiting one.
 * * 5. Static Methods:- Methods that are belong to class itself, not to instances of the class. You can call them directly inside class.
 * * 6. Getters and Setters:-Special Methods that allow you to define how properties are accessed and modified .
 */

class rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    console.log(area);
  }
  paint() {
    console.log("Painting with color " + this.color);
  }
}
const rect = new rectangle(2, 4, "red");
rect.area();
rect.paint();

/**
 *  Inbuilt classes in JS
 *  1. Date class
 *  2. Map Class  --> use to create key value pairs
 */
const date = new Date();
console.log(date.getMinutes());
console.log(date.getFullYear());

const map = new Map();
map.set("name", "Mrityunjay");
map.set("Age", 21);
const firstname = map.get("name");
console.log(firstname);

/**
 * ! Promoise in JS:-
 * *
 */
