const marvel_heroes = ["thor", "Ironman" , "Spiderman"]
const dc_heror = ["Superman" , "Flash" , "Batman"]

//marvel_heroes.push(dc_heror)

//console.log(marvel_heroes);

//const all_heroes = marvel_heroes.concat(dc_heror)

//console.log(all_heroes);

const all_new_heros = [...marvel_heroes, ...dc_heror]

//console.log(all_new_heros);

const mt_num = [6,8,9, [1,3,5],8, [6,9,4]]

const use_arr = mt_num.flat(Infinity)

//console.log(use_arr);

console.log(Array.isArray("Isha"));
console.log(Array.from("Isha"));

let score1 = 789
let score2 = 685
let score3 = 209

console.log(Array.of(score1,score2 ,score3));