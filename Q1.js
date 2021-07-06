var dateToday = new Date('October 15,1996 05:35:32:77 GMT+11');
var milliseconds=dateToday.getUTCMilliseconds();
console.log(milliseconds);// 77

// we can fetch the  millisecond according to universal time from getUTCMilliseconds() method