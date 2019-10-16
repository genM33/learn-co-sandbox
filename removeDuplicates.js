const numbers = [23, 12, 34, 56, 77, 77, 84, 34, 23, 84, 23, 56, 77, 12, 56, 84, 23, 12, 23, 34, 12, 77, 56];
const uniques = [];
for (let i = 0; i <= numbers.length; i++) {
  if (uniques.includes(numbers[i]) === false) {
    uniques.push(numbers[i]);
  }
}
console.log(uniques);