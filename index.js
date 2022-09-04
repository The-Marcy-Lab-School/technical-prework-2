function firstElement(array){
  return array[0]
}

function lastElement(array){
  return array[array.length - 1]
}

function arrayLength(array){
  return array.length
}

function sequence(num){
  const array = []
  for(let i = 1; i <= num; i++){
    array.push(i)
  }
  return array
}

function sum(numbers){
  let total = 0
  for(let i = 0; i < numbers.length; i++){
    total += numbers[i]
  }
  return total
}

function average(numbers){
  return sum(numbers) / numbers.length
}

function multiplicativeAverage(numbers){
  let total = 1
  for(let i = 0; i < numbers.length; i++){
    total *= numbers[i]
  }
  return total / numbers.length
}

function negatedArray(numbers){
  return numbers.map(num => -num)
}

function doubleArray(numbers){
  return numbers.map(num => num * 2)
}

function addList(arr1, arr2){
  const array = []
  for(let i = 0; i < arr1.length; i++){
    array.push(arr1[i] + arr2[i])
  }
  return array
}

function multiplyList(arr1, arr2){
  const array = []
  for(let i = 0; i < arr1.length; i++){
    array.push(arr1[i] * arr2[i])
  }
  return array
}

function introducePerson(person){
  return `My name is ${person.name}. I am ${person.age} years old.`
}

function canVote(person){
  return person.isCitizen && person.age >=18
}

module.exports = {
  firstElement,
  lastElement,
  arrayLength,
  sequence,
  sum,
  average,
  multiplicativeAverage,
  negatedArray,
  doubleArray,
  addList,
  multiplyList,
  introducePerson,
  canVote
}
