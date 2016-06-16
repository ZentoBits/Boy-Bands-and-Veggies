var bands = [
	"Boyz II Men",
	"NSync", 
	"New Kids on the Block", 
	"98 Degrees", 
	"One Direction"
];

var vegetables = [
	"Carrots", 
	"Kale", 
	"Zucchini", 
	"Broccoli", 
	"Squash"
];

var loopCount = 5;

var currentBand = "";

var currentVeggie = "";

var bandElement = document.getElementById("boy-bands");

var veggieElement = document.getElementById("vegetables");

for (i = 0; i < loopCount; i+= 1) {
	bandElement.innerHTML += "<div>" + bands[i] + "</div>"
	veggieElement.innerHTML += "<div>" + vegetables[i] + "</div>"
}