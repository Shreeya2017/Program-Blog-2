var x=0;
var y=0;
var z=0;

// drawing patterns with console log
while (x<=4) {
//console.log(x);
console.log("# # #");
console.log("* # *");
x=x+1;
}

//drawing patterns in console log and .length
var string= "&^&%&^"
while (y<string.length)
{
    console.log("*");
    console.log("#");
    y=y+1;
}

//drawing patterns in console log with if statement and calling function
function case1(){
    console.log("*");
}
function case2(){
    console.log("***");
}
function case3(){
    console.log("*****");
}

if (z=1)case1();
if (z=2)case2();
if (z=3)case3();
if (z=2)case2();
if (z=1)case1();
z=z+1;