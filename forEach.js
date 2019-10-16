/*
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

console.log(numbers);


function func() { 
  
    // Original array 
    const items = [1, 29, 47]; 
    const copy = []; 
  
    items.forEach(function(item){ 
        copy.push(item*item); 
    }); 
  
    console.log(copy); 
} 
func();
*/

const numbers = [1,2,3,4,5];

function totalOfNumbers(arr) {
  arr.forEach(function(item, i, arr) {
    arr[i] = item*10;
  });
  console.log(arr);
}

totalOfNumbers(numbers);
