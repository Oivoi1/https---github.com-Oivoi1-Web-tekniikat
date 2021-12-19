
let numerot = [1,2,3,4,5]

let muokattu = numerot.map(x => x === 3)
let muokattu2 = numerot.map(x => x*2)

//function edit(x){
//    return x*2
//}

/*for (const n of numerot) {
    console.log(n)
}
numerot.forEach(n => console.log(n));*/

let ages = [17, 22, 70, 4]

let adults = ages.filter(age => age >=18);
console.log(adults)

let oldFound = ages.some(age)