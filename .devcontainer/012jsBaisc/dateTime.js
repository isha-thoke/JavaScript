let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
console.log(myDate.getDate());
console.log(myDate.getMonth());
myDate.toLocaleString('default',{
    weekday : "long",

})
console.log(myDate);

let createdDate = new Date(2028,0,11)
console.log(createdDate.toDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);/