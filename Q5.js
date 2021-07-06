var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
console.log(new_arr);//[ 1, 28, 39, 17, 32.5 ]


/* 
if we use the print method to print new_arr it will give te syntex error
and if we use the console.log the output is [ 1, 28, 39, 17, 32.5 ]
 */