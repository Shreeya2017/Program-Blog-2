document.getElementById("cow").innerHTML = "hello";
document.getElementById("dog").innerHTML = "hello";
document.getElementById("pigeon").innerHTML = "hello";

var myaudio = document.getElementById("flopper");
console.log(myaudio);
var cat = document.getElementById("cat");

var count = 0;
var colours = ['red', 'green', 'blue', 'aquamarine', 'pink'];

cat.onclick = function (){
	cat.innerHTML = "hello";
	myaudio.play();
	cat.style.backgroundColor = colours[count];

	count = count + 1;
	if (count >= colours.length){
		count = 0;
	}
};


/*
// JSON Javascript Object Notation
var x = {}; // blank object
// parameters with names : types separated by commas
var coffee = {
	recipe : {
		liquid : 'water',
		solid : 'bean',	
		ratio : 0.1,
	},
	strength : 11, 
	brew : function(){alert("WAKE UP!!")},
};
coffee.recipe; // undefined
coffee.strength; // 11
coffee.brew(); // alert
*/