let numbers1 = [5,8,16,13,25];

let numbers2 = [ 2,4,18,20,22];

let combined= [...numbers1,...numbers2]
console.log(combined);

let squaredNUmbers = combined.map( number => number*number)
console.log(squaredNUmbers);

let evenNumbers = squaredNUmbers.filter( num => num % 2 === 0);
console.log(evenNumbers);

let sum = evenNumbers.reduce( (first,second ) => first + second ,0)
console.log(sum);

let number = 20;

if (number >10 && number % 2 ===0) {
    console.log(true);
    
} else {
    console.log(false);
    
}