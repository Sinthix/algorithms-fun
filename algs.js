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