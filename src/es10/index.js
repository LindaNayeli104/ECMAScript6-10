let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1));

//flatMap
let array2 = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

//trimStart   trimEnd
let hello = "Hello World       ";
console.log(hello);
console.log(hello.trimEnd());

//-----------
try {
} catch {
  error;
}

//.fromEntries

let entries = [
  ["name", "Oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));

//.description

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
