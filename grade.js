/*Output the following letter grade from a variable with with a test score. 
Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. 
**Bonus: Try it again with a switch statement ** */

var testScore = 55

if (testScore >= 81 && testScore <= 100) {
	console.log("You got an A!");
}
else if (testScore >= 61 && testScore <= 80) {
	console.log("You got a B!");
}
else if (testScore >= 41 && testScore <= 60) {
	console.log("You got a C!");
}
else if (testScore >= 21 && testScore <= 40) {
	console.log("You got a D!");
}
else {
	console.log("You got an F!");
}

/* if/else if/else loops are my shit. 
I did start this problem going from 0 - 100, but it finally worked when I got some advice to go from 100 to 0. 
Also, my semicolons were wack and gave me some syntax errors/*