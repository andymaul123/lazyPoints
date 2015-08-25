

//Fill in these parts -----------------------------------------------------------------

//Array of the answer point values. Plug in your answer values here.
var pointValues = [15, 14, 14, 14, 14, 14];

//Array of question types. Plug in the question types here.
//Currently on supported types are Short Answer and Multiple Choice
var pointTypes = ["SA", "SA", "SA", "MC", "SA", "MC"];

//Multiplier is how many questions per pool, e.g. 3 for posttests
var multiplier = 3;

//-----------------------------------------------------------------


if (pointValues.length == pointTypes.length) { 	
	var iterations = pointValues.length * multiplier +1; 
	var dyn1 = 0;
	var dyn2 = 0;
	for (i=1; i<iterations; i++) {
		var temp = Math.floor((i-1) / multiplier);
		if (pointTypes[temp] == "MC") {
			dyn1++;
			idName = "points2-" + dyn1;
		}
		else if (pointTypes[temp] == "SA") {
			dyn2++;
			idName = "points6-" + dyn2;
		}	
		else {
			console.log("Error: This function doesn't support answers other than SA or MC because Andy is lazy.");
		}	
		document.getElementById(idName).value=pointValues[temp];
	}
}
else {
	console.log("Error: Arrays do not match in length! Re-check inputs!");
}
