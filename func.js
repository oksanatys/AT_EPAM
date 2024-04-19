// Create a car object, add a color property to it with the value equals 'black'
// Change the color property of the car object to 'green'
// Add the power property to the car object, which is a function and displays the engine power to the console

const car = {};
car.color = 'black';
console.log("Initial color:", car.color);

car.power = function () {
    console.log("Engine power: 2.4");
};

car.color = 'green';
console.log("Updated color:", car.color);

car.power();

//Pears and apples are accepted to the warehouse, write a function that returns 
//the result of adding the number of accepted pears and apples

const numPears = 20;
const numApples = 35;
const totalFruits = countFruits(numPears, numApples);

function countFruits(pears, apples) 
{
    const totalFruits = pears + apples;
  return totalFruits;
}

console.log("Total accepted fruits:", totalFruits);


//Your name is saved in the payment terminal, write a function to define 
//the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

const enteredName = "Oksana";

function greetCustomer(name) {
    if (name) {
      return `Hello, ${name}!`;
    } else {
      return "No name saved in the terminal.";
    }
  }

  const greeting = greetCustomer(enteredName);
console.log(greeting);


//Write a function for calculating the type of argument and type output to the console

function checkType(arg) 
{
    const type = typeof arg;
    console.log(`Argument type: ${type}`);
  }
c
  checkType(10); 
checkType(true);   
checkType(null);       
checkType(undefined);   
checkType([1, 2, 3]); 
checkType({ name: "John" });


//Write a function that determines whether a number is prime or not

const num1 = 11;
const num2 = 10;
const num3 = 5;

function isPrime(number) 
{
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) 
    {
      if (number % i === 0) 
      {
        return false;
      }
    }
    return true;
  }
  
console.log(`${num1} is prime: ${isPrime(num1)}`);  
console.log(`${num2} is prime: ${isPrime(num2)}`); 
console.log(`${num3} is prime: ${isPrime(num3)}`); 