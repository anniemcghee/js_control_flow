/* Take an input like

thing = "cat"
count = "5"
and output the pluralized form of the word like "5 cats" or "1 dog"..*/

var thing = "cat"
var count = 1

if (count > 1){
	console.log(count + " " + thing + "s")
}
else {
	console.log(count + " " + thing)
}

/* there's probably a drier way to do this but whatevaaaa