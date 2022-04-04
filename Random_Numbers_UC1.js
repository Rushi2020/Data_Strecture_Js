// var numberOfRandoms = 3;
// var maxRange = 1000;


// print 10 random 3 digit number
var num = [];
var randomnumber=10;
var Max_Range=900;

for (var i=0; i<randomnumber; i++){
  var random =Math.floor((Math.random() * Max_Range) + 100);
num.push(random);
}
console.log(num)