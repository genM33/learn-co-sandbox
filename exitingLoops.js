function find(array, criteriaFunc) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFunc(array[i])) {
      return array[i];
    }
  }
}

console.log(find(["dog", "cat", "horse", "mouse", "ant", "cow", "antelope"], (s) => s.length > 3));



const scores = [3, 4, 10, 5, 11, 6];
 
// increment all scores < 10
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 10) {
    continue;
  }
 
  scores[i]++;
}
 
console.log(scores); // [4, 5, 10, 6, 11, 7]