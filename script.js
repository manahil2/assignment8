//1
// Numbers (0-9) have ASCII codes from 48 to 57.
// Uppercase letters (A-Z) have ASCII codes from 65 to 90.
// Lowercase letters (a-z) have ASCII codes from 97 to 122.
// charCodeAt(0) retrieves the ASCII/Unicode value of the character at index 0 of the string. Since the user will likely enter just one character, we use charCodeAt(0) to get the value of the first (and only) character in the input.
let character = prompt("Enter a character(number or string)").charCodeAt(0);
if(character>=48 && character<=57){
    document.write("The input is a number"+"<br>")
}
else if (character >= 65 && character <= 90) {
    document.write("The input is an uppercase letter."+"<br>");
}
else if (character >= 97 && character <= 122) {
    document.write("The input is a lowercase letter."+"<br>");
}
else {
    document.write("The input is neither a number nor a valid alphabetical letter."+"<br>");
}

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
 let int1 = prompt("Enter 1st number");
 let int2 = prompt("Enter 2nd number");
 if(int1>int2){
    document.write(int1+" is larger than "+int2+"<br>");
 }
 else if(int1<int2){
    document.write(int2+" is larger than "+int1+"<br>");
 }
 else{
    document.write("Both numbers are equal"+"<br>");
 }

//3.Write a program that takes a character(ie string of length 1 and return true if it is a vowel,false otherwise)
let char = prompt("Enter a character:");
char = char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    document.write("Is the character a vowel? true"+"<br>");
} else {
    document.write("Is the character a vowel? false"+"<br>");
}

//4.Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
let num = prompt("Enter a number");
if(num>0){
    document.write("The number is positive"+"<br>");
}else if(num<0){
    document.write("The number is negative"+"<br>");
}else if(num==0){
    document.write("The number is 0"+"<br>");
}else{
    document.write("Invalid input"+"<br>");
}

//5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: 
let correctPassword = "secretpassword123"
let userPassword = prompt("Enter your password");
if(userPassword==""){
    document.write("Please enter your Password");
}else if(correctPassword===userPassword){
    document.write("Correct! The password you entered matches the original password");
}else{
    document.write("Incorrect Password!Please try again"+"<br>");
}

//6
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
}
else{ 
greeting = "Good evening"; 
} 

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 
let time = prompt("Enter time in 24-hour clock format");
if (time >= 0 && time < 1200) {
    document.write("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    document.write("Good night!");
}
else {
    document.write("Invalid time input.");
}