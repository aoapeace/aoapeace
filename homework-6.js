console.log("HW6: JavaScript Fundamentals Practice");
console.log("Complete all 10 exercises. Test your code as you go.");

// ------------------------------
// Exercise 1: String variable
const studentName = "Abdulsalam Ajibade";
console.log(studentName);

// ------------------------------
// Exercise 2: Number variable
let hoursStudied = 5;
console.log(hoursStudied);

// ------------------------------
// Exercise 3: Boolean variable
const isReady = true;
console.log(isReady);

// ------------------------------
// Exercise 4: Array variable
const favoriteSites = ["YouTube", "Google", "CodePen"];
console.log(favoriteSites);

// ------------------------------
// Exercise 5: Function with a parameter
function makeGreeting(name) {
  return `Hello, ${name}!`;
}
console.log(makeGreeting("Maya"));

// ------------------------------
// Exercise 6: Function that does math
function calculateTotal(price, tax) {
  return price + tax;
}
console.log(calculateTotal(20, 2));

// ------------------------------
// Exercise 7: Conditional
function checkAge(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "minor";
  }
}
console.log(checkAge(20));
console.log(checkAge(16));

// ------------------------------
// Exercise 8: Conditional with a score
function checkPassing(score) {
  if (score >= 70) {
    return "pass";
  } else {
    return "try again";
  }
}
console.log(checkPassing(85));
console.log(checkPassing(60));

// ------------------------------
// Exercise 9: Loop through an array
const webSkills = ["HTML", "CSS", "JavaScript"];
for (const skill of webSkills) {
  console.log(skill);
}

// ------------------------------
// Exercise 10: Loop and return a value
function countItems(items) {
  let count = 0;

  for (const item of items) {
    count++;
  }

  return count;
}
console.log(countItems(["HTML", "CSS", "JS"]));

// ------------------------------
// Final check
// What part of JavaScript feels clearest to you so far?
// I feel clearest about using functions to take input and return a result.