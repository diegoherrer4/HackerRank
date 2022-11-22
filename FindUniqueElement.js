// 4

// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    return a.filter(e => a.indexOf(e) === a.lastIndexOf(e))

}