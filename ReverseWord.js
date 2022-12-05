// 5

// Given a string of characters as input, 
//write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

const reverseStr = (str) => {
let arr = str.split('')
let newArr = []
  for(i=str.length - 1; i>=0; i--){
    newArr.push(arr[i])
  }
  return newArr.join('')
}
