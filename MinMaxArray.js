// 2

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum
//  values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let maxArr = arr.sort((a,b) => a-b).filter(e => e !== arr[0]).reduce((a,b) => a+b); 
    let minArr = arr.sort((a,b) => a-b).filter(e => e !== arr[arr.length - 1]).reduce((a,b) => a+b); 
    console.log(minArr, maxArr)
    }