var name = prompt("Tell me your name.");
var num = prompt("Give me a number.");
var num2 = prompt("Give me another number.");

document.write("You are going to have a wonderful day, " + name + ".");

document.write(" By the way, the sum of your numbers is " + (+num + +num2) + ".");
// if you don't put the + before num and num2 then it concatonates adding the values (not summarizing). 
// Ex. Values 1 and 4 
// concatonating is 1 and 4, which makes 14
// the +'s make the numbers add together (sum), so 1 and 4 makes 5 - that's what we want here

