// 1

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.


function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zeroes = 0
   
    for(let i of arr) {
     if (i === 0) {
         zeroes++
     } else if (i < 0) {
         negative++
     } else {
         positive++
     }
    }
     let positiveRatio = (positive / arr.length).toFixed(6)
    let negativeRatio = (negative / arr.length).toFixed(6)
    let zeroesRatio = (zeroes / arr.length).toFixed(6)
    console.log(positiveRatio, '\n', negativeRatio, '\n', zeroesRatio)
}