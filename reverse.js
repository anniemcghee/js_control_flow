//Write a program that will take a hardcoded string, and console log the reversed version of it. Use a for loop

//var inputString = "building"

var inputString = "chickens";
var reverseString = "";

for (var i = inputString.length-1; i >=0; i--) {
	reverseString += inputString.charAt(i);
}

console.log(reverseString)


/* I had no idea about charAt or inputString.length -1 or i-- until I asked people. 
I still find arrays and strings baffling.
This problem was hard. 
/*
