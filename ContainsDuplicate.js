// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums){
    const unique = [...new Set(nums)]
    return nums === unique ? false : true
};