const person = {
  name: "Terrance Roberts",
  occupation: {
    title: "District Manager",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
};

//console.log(person.occupation);
//console.log(person.occupation.yearsHeld);
//console.log(person.pets[1].name);

const numberCollections = [1, [2, [4, [5, [6]], 3]]];
//console.log(numberCollections[1][1][1][1][0]);

/*
function find(array, criteriaFn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (criteriaFn(array[i])) {
      newArray[i] = array[i];
    }
  }
  //return newArray.filter(Number).join(', ');
  return newArray.join('').split('');
}
*/

//console.log(find([1,2,3,4,5,6,7,8], someNumber => someNumber % 2 === 0));

function find(array, criteriaFn) {
  let current = array;
  let next = [];
  while (current || current === 0) {
    if (criteriaFn(current)) {
      return current;
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();
  }
  return null;
}

//console.log(find(numberCollections, number => number > 5));
console.log(find(numberCollections, number => (typeof number === 'number' && number > 5)));