// google find pair that equals given sum

var ar = [1,2,4,4];
var l = 0;
function findPairSum(arr, soma){
	for(var i=0;i<arr.length;i++){
    l = arr.length-1;
    if(arr[i]+arr[l] > soma){
    	console.log('big' + arr[l])
    	l--;
    }
    if(arr[i]+arr[l]==soma){
    	console.log([arr[i], arr[l]]) 
    }
    
  }
}

findPairSum(ar,8)

// find duplicates and return biggest dupplication

var ar = [3,1,2,3,3,2];

function findDup(ar){
	var dup = [], o = {};
    for (var i = 0; i < ar.length; i++) {
        if (!o[ar[i]]) {
            o[ar[i]] = 1
        } else {
            o[ar[i]] = o[ar[i]] + 1;
            dup.push(o[ar[i]])
        }
    }
    return Math.max(...dup)
}

console.log(findDup(ar))
		

// for a given array right shift a set numbers given and then query the array with the given queries 

var a = [1,2,3]
var k = 2;
var queries = [0,1,2]
var n = [];
    var len = a.length - 1;
    // expected 2 3 1


    for (var i = 0; i < k; i++) {
        a.unshift(parseInt(a.splice(-1, 1)))
    }
    for (var q = 0; q < queries.length; q++){
        n.push(a[queries[q]])
    }
    console.log(n)

// verify permutation p(p(y))

var p = [4, 3, 5, 1, 2]

p.map(function(e,i) {
	//console.log(p.indexOf(i + 1))
	console.log(p.indexOf(p.indexOf(i + 1) + 1) + 1)
})


// for each 1 in array remove 2 from energy for every jump remove 1
// c is the map; k is the jump; e is energy
var c = [0,0,1,0,0,1,1,0]

var k = 2;

var e = 100;

for(var i = 0; i< c.length;i+=k){
	e--
  console.log(e)
  if(c[i]>=1){
  	e = e -c[i]-1;
  }
	
}
console.log(e)

// from a given int check how many divisors we have d%n = 0
var n = 1012;
var a = [];
var digits = 0;
function findDigits(n){
    a= n.toString().split("");
  a.map(function(item){
    if(n % parseInt(item) == 0){
    digits++;
    } 
  })
  console.log(digits)
}

findDigits(n)

// calculate rounded grades less than 40 is a fail
var grades = [73,67,38,33]
var v = 0;
for(var i = 0;i<grades.length;i++){
var rounded = Math.ceil(grades[i]/5)*5;
    if(rounded >40 ){
    if(rounded - grades[i] < 3){
      v = rounded;
    } else {
      v = grades[i];
    }
  } else {
    v = grades[i];
  }
  console.log(v)
}

//s: integer, starting point of Sam's house location.
//t: integer, ending location of Sam's house location.
//a: integer, location of the Apple tree.
//b: integer, location of the Orange tree.
//apples: integer array, distances at which each apple falls from the tree.
//oranges: integer array, distances at which each orange falls from the tree.

Array.prototype.sum = function (f) {
        return this.reduce((s, v) => s + f(v), 0);
    }

    console.log(apples.sum(d => s - a <= d && d <= t - a));
    console.log(oranges.sum(d => s - b <= d && d <= t - b));