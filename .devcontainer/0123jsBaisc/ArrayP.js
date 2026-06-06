//array
const myArr = [2,5,6,8,3]
 const myArr2 = new  Array(5,8,4,9)
 console.log(myArr);
//Array Methods
myArr.unshift(4)
console.log(myArr);
myArr.shift()
console.log(myArr.includes(6));
console.log(myArr.indexOf(6))
Arr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

//slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1,4)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn1);
console.log("C" , myArr);