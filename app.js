console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = [hobbies];
    }
        info = function (){
            console.log(`${this.name} has ${this.pets} pets, enjoys ${this.hobbies}, and resides at ${this.residence}.`);
        }
        soundOff = function (){};
        addHobby = function (hobby){
            this.hobbies.push(hobby);
        }
        removeHobby = function (hobby){
            const index = this.hobbies.indexOf(hobby);
            if (index > -1){
                this.hobbies.splice(index, 1);
            }
            
        }
        greeting = function (){
            console.log(`Hello ${this.name}!`);
        }
   
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


//Alright, time to make our first class extension!
class Coder extends Person {
    constructor (name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
}
greeting = function(){
    console.log(`Hello there, ${this.name} here, just a regular ${this.occupation}!`);
}
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//Let's make a person!
let Bob = new Person("Bob",2,"417 Park Lane","Fishing, Golfing, Camping, Swimming");
Bob.info();
Bob.greeting();
Bob.addHobby(" Kayaking");
Bob.info();
Bob.removeHobby(" Kayaking");
Bob.info();

//Let's make a coder person!
let steve = new Coder("Steve",3,"The House", "Snowboarding, Rock Climbing, Chess, Cycling",);
steve.greeting();
steve.info();


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");


//let's build a calculator printing machine
class Calculator {
    constructor (result = 0){
        this.result = result;
    }
    add = function(a, b = 0){ return this.result =  (a + b)};
    subtract = function(a, b = 0){ return this.result = (a - b)};
    multiply = function(a, b = 1){ return this.result = (a * b)};
    divide = function(a, b = 1){ return this.result = (a / b)};
}


//Let's make a cool calculator
let quickMafs = new Calculator();

console.log(quickMafs.add(5));
console.log(quickMafs.add(5,3));
console.log(quickMafs.subtract(4));
console.log(quickMafs.subtract(4,2));
console.log(quickMafs.multiply(3));
console.log(quickMafs.multiply(3,6));
console.log(quickMafs.divide(7));
console.log(quickMafs.divide(12,3));