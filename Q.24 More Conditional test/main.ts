let car: string = 'sabaru';
let age: number = 25;
let numbers: number[]=[1,2,3,4];

//Test 1: Equality (true)
console.log("Is car == 'Subaru'? I predict true.");
console.log(car == 'Subaru'); //true (case-insensitive)

// Test 2: Strict equality (false)
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');//false (case-sensitive)

// Test 3: Inequality (true)
console.log("Is car != 'Toyota'? I predict true.")
console.log(car != 'Toyota');

// Test 4: Inequality (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

//**Lowercase Function Tests**

//Test 5:Lowercase coversion (true) 
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLocaleLowerCase() == 'subaru');

//Test 6: Lowercase coversion (false)
console.log("Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());

//Test 7: Equality (true) 
console.log("Is age == 25? I predict true.");
console.log(age == 25);
  
// Test 8: Inquality (false)
console.log("Is age != 30? I predict true.");
console.log(age != 30);

// Test 9: Grater than (false)
console.log("Is age > 30? I predict false.")
console.log(age > 30);

// Test 10: Less than or equal (true)
console.log("Is age < 25? I predict true.");
console.log(age < 25)

//**Logical Operators**

// Test 11: AND (true)
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30);//true (both condition met)

// Test 12: OR (false)
console.log("Is age > 30 || age <18? I predict false.");
console.log(age > 30 || age <18);

//**Arrays Test**

//Test 13: In array (true)
console.log("In 3 in numbers? I predict true.");
console.log(3 in numbers); // true (checks for index existence)

// // Test 14: Not in array (false)
console.log("Is 5 not in numbers? I predict true.");
console.log(5 not in numbers); //true (negation of "in" operator)

 


