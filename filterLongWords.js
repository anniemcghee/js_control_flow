//Hardcode an array of words. 
//Have a variable maxLength, push words that are less than the maxLength into a new array, 
//and console.log that.
var myArray = ["desk","pencil","computer","eraser","book","pho"];
var maxLength = 4;
var newArray = [];

for (var i=0; i < myArray.length; i++) {
	if (myArray[i].length < maxLength) {
		newArray.push(myArray[i]);
	}
}
console.log(newArray);

/*I understand the logic of what needs to happen, but the syntax really f'd me up. 
I didn't know where to start once I got my "for (----)"" written - what next?
Also, I want to know more about blank arrays and blank variables - do they have to get set up beforehand? What is standard?*/