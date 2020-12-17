function newFunction(name, age, country) {
  var name = name || "linda";
  var age = age || 21;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "linda", age = 21, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Oscar", 19, "USA");

//----------------------------------------------------------
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//templates literals

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//------------------------------------------------------------

let lorem =
  "Frase epica. Soy Linda. Amo viajar y programar.\n" +
  "Me gusta hacer progrmación web!";

//es6
let lorem2 = `Hola a todos
me llamo Linda.
Me gusta viajar y programar!`;

console.log(lorem);
console.log(lorem2);

//------------------------------------
let person = {
  name: "Oscar",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

//Destructuracion de elementos
let { name, age, country } = person;
console.log(name, age, country);

//-----------------------------------
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];
let education = ["David", ...team1, ...team2];

console.log(education);
//Operador de propagacion

//-------------------
{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

//------------es6

const a = "b";
a = "a";
console.log(a);

//---------------------
let name = "Oscar";
let age = 32;
//es5
obj1 = { name: name, age: age };

//es6
obj2 = { name, age };
console.log(obj2);

//-----------

const names = [
  { name: "Oscar", age: 32 },
  { name: "Yesica", age: 27 },
];
//Pasamos una funcioin anomima
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//Arrow functions
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNAmes3 = (name, age, country) =>{
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;

//---------Promesas   (Para trabajar el asincronismo)

const helloPromise = () => {
  return new Promise((resolve, reject) =>{
    if(true){
      resolve("Hey, todo bien!");
    }else{
      reject("Ups, algo mal!");
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("Hola"))
  .catch(error => console.log(error))

  //----------------------------------------Clases
  class calculator{
    constructor(){
      this.valueA = 0;
      this.valueB = 0;
    }

    sum(valueA, valueB){
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB
    }
  }

const calc = new calculator();
console.log(calc.sum(2,2));

//-------------------------Trabajar con 
import {hello} from "./module";

hello();

//-------------Generators
function* helloWorld(){
  if(true){
    yield "Hello, "; 
  }
  if(true){
    yield "World";
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//----------------






