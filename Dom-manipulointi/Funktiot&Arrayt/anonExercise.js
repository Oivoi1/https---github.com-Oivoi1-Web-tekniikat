// Tehtävä 1
let numerot = ["one", "two", "three", "four", "five"]
numerot.forEach(numero => console.log(numero))

// Tehtävä 2
let prices = [80, 120, 170, 55, 200]

let discount = prices.map(x => x*0.2 + "€")
console.log(discount)

// Tehtävä 3
let names = ["John", "Tyson", "Alice", "John", "Tukiainen"]
names = names.map(name => 
    {if (name === "John"){
        return "Matti"
    }
     return name
    });
// Toinen tapa If Elselle:
    names = names.map(item => item === "John" ? "Matti": item)

console.log(names)

// Tehtävä 4
let numbers = [12, -5, 120, -44, 25]
let filtered = numbers.filter(item => item > 0);
console.log(filtered)

// Tehtävä 5
names = names.filter(x => x.length > 8 && x[0] === "T")
console.log(names)

// Tehtävä 6
if(names.every( sana => sana.length>0)){
    let pituudet = names.map(sana => sana.length);

    let summa = pituudet.reduce( (prev, cur) => prev + cur );
    console.log(summa)
}