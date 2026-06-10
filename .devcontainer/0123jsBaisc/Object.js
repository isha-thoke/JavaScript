//singleton

//object literals
//object create
const mySyn = Symbol("Key1")

const JsUseer = {
name : "Isha",
[mySyn] :"myKey1",
age : 12,
location : "Bhopal",
Email : "theHi12@gmail.com",
lastLoginDays : ["Monday", "Tuesday"],
}
console.log(JsUseer[mySyn]); 

Object.freeze(JsUseer)
console.log(JsUseer);

JsUseer.greeting = function(){
    console.log("Hello  JS User ");
}

JsUseer.greeting1 = function(){
    console.log(`Hello  JS User , ${this.name}`);
}

console.log(JsUseer.greeting());
console.log(JsUseer.greeting1());