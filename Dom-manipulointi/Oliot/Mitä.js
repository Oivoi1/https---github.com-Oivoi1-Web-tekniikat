let persons = [
    {
        fname: "Veeti",
        age: 21
    },
    {
        fname: "Liisa",
        age: 17
    },
    {
        fname: "Sami",
        age: 14
    },
]
// Jokainen alaikäinen filtteröidään
let children = persons.filter( p => p.age<18 )

// Ainoastaan etunimet
let names = persons.map( p => p.fname)

// Hakukentällä haku tiettyä kirjainta.
let word = "s";

let filtered_persons = persons.filter( p => p.fname.includes(word) )