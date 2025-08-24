// Q1. Ask the user to enter their age. If the age is less than 13, display 'Child'; if between 13 and 19,
//     display 'Teenager'; otherwise display 'Adult'.

// Solution:
// var age = prompt("Enter your age here");

// if (age < 13){
//     alert("Your child")
// }
// else if (age>=13 && age<=19){
//     alert("Your Teenager")
// }
// else {
//     alert("Your Adult")
// }


// Q2. 2. Write a program that asks the user to enter a number. If the number is divisible by both 2 and 3,
//     show 'Divisible by both'. Otherwise, show 'Not divisible by both'.

// Solution:
// var number = prompt("Enter any number here");

// if (number % 2 === 0 && number % 3 === 0){
//     alert("Divisible by both")
// }
// else{
//     alert("Not divisible by both")
// }


// Q3.  3. Create a program that asks the user for a password. If it matches 'saylani123', show 'Access
//      Granted', otherwise show 'Access Denied

// Solution:
// var password = prompt("Enter your password here");

// if (password === "saylani123"){
//     alert("Access Granted")
// }
// else{
//     alert("Access Denied")
// }


// Q4. Ask the user to enter two numbers. Display the larger number using an if…else statement.

// Solution:
// var firstnum = Number(prompt("Enter first number"));
// var secondnum = Number(prompt("Enter second number"));

// if (firstnum > secondnum){
//     alert("The large number is" + firstnum)
// }
// else{
//     alert("The large number is" + secondnum)
// }


// Q5. Create an array of 5 colors. Display the first and last color from the array in an alert.

// Solution:
// var colors = ["Green", "White", "Black", "Blue"]
// alert(colors[0] + colors[3])


// Q6. Make an array of fruits with 3 items. Add one more fruit at the end using .push() and show the
//     new array in console

// Solution:
// var fruits = ["Apple", "Mango", "Dragonfruit"];
// fruits.push("banana");
// alert(fruits)


// Q7. Write a program that removes the first element of an array of city names and then prints the
//     updated array.

// Solution:
// var cities = ["Karachi", "Islamabad", "Quetta", "KPK"]
// cities.shift("Karachi")
// alert(cities)


// Q8. Create an array of numbers [10, 20, 30, 40, 50]. Use .splice() to remove the middle number (30)
//     and display the array.

// Solution:
// var number = [10, 20, 30, 40, 50];
// number.splice(2,1)
// alert(number)


// Q9. Make an array [100, 200, 300, 400, 500]. Use .slice(1, 4) and show the result in the console.

// Solution:
// var num = [100, 200, 300, 400, 500];
// var newnum = num.slice(1, 4)
// alert(newnum)


// Q10. Ask the user to enter 3 subjects’ marks. Store them in an array. Calculate the total and average
//      using array values and display it.

// Solution:
// var math = Number(prompt("Enter your math marks"));
// var chemistry = Number(prompt("Enter your chemistry marks"));
// var physics = Number(prompt("Enter your physics marks"));

// var marks = [math,chemistry,physics];

// var total = marks[0] + marks[1] + marks[2];

// var average = total / marks.length;
// alert("Total Marks = " + total + "\nAverage = " + average.toFixed(2));


// Q11. 11. Write a program that asks the user for a month number (1–12). Use if…else if statements to
//      display the season ('Winter', 'Spring', 'Summer', 'Autumn').

// Solution:
// var month = Number(prompt("Enter number between 1to12"));

// if (month === 12 || month === 1 || month === 2){
//     alert("Season is Winter")
// }
// else if (month === 3 || month === 4 || month === 5){
//     alert("Season is Spring")
// }
// else if (month === 6 || month === 7 || month === 8){
//     alert("Season is Summer")
// }
// else if (month === 9 || month === 10 || month === 11){
//     alert("Season is Autumn")
// }
// else{
//     alert("Enter valid number")
// }


// Q12.  12. Create a loop that prints all even numbers from 2 to 20 in the console.

// Solution:
// for (var a = 2; a <= 20; a += 2){
//     alert(a)
// }


// Q13. Use a for loop to display each element of the array ['Ali', 'Sara', 'Ahmed', 'Ayesha'].

// Solution:
// var naam = ['Ali', 'Sara', 'Ahmed', 'Ayesha']
// for (var i = 0 ; i< naam.length; i++){
//     alert(naam[i])
// }


// Q14. Write a program that asks the user to enter a number and then displays its multiplication table
//  using a loop (up to 10).

// Solution:
// var num = Number(prompt("Enter number here"));
// for (var i = 1; i <=10; i++){
//     var result = num * i;
//     console.log(num + " x " + i + " = " + result);
// }

// Q15. Create an array [2, 4, 6, 8, 10]. Use a for loop to calculate the sum of all numbers and print it.

// Solution:
// var numbers = [2, 4, 6, 8, 10];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Sum of all numbers is: " + sum);


// Q16. Ask the user to enter a name. If the name is 'Alice' or 'Bob', show 'Welcome!'. Otherwise, show
//      'You are not authorized.'


// Solution:
// var name = prompt("Enter your name here");
// if (name === "Alice" || name ==="Bob"){
//     alert("Welcome!")
// }
// else{
//     alert("You are not authorized")
// }


// Q17. Write a program that uses nested if statements to check if a number is positive and also even. If
//      both are true, display 'Positive Even'. If only positive, display 'Positive Odd'. Otherwise show
//      'Negative number'.

// Solution:
// var num = Number(prompt("Enter your here:"));
// if (num > 0) {
//     if (num % 2 === 0) {
//         alert("Positive Even");
//     } else {
//         alert("Positive Odd");
//     }
// } else {
//     alert("Negative number");
// }


// Q18. Create an array ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']. Use .splice() to insert 'Mango' at
//      the 2nd index and show the new array

// Solution:

// var fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
// fruits.splice(2, 0, 'Mango')
// alert(fruits)