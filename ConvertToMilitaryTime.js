// 3

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(str) {
    let hh = Number(str.slice(0,2))
    let mm = str.slice(3,5)
    let ss = str.slice(6,8)
    let meridian = str.slice(8,10)  
  
      if (hh == 12 && meridian == 'AM'){
          hh -= 12
          
      } else if (1 < hh && hh < 12 && meridian == 'PM') {
          hh += 12
          
      } 
      let newHH = hh.toString()
     return newHH.length < 2 ? `0${newHH}:${mm}:${ss}` : `${newHH}:${mm}:${ss}`
      
      }