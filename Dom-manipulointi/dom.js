function _(name){return document.querySelector(name)}

// Harjoitus A
let aElementti = document.querySelector("#content")
console.log(aElementti.nodeName)

// Harjoitus B
let firstBasic = document.querySelector(".basic")
console.log(firstBasic.nodeName)

// Harjoitus C
let allItems = document.getElementsByTagName("li") // tai querySelectorAll
for(i of allItems){
    console.log(i.textContent);
}

// Harjoitus D
let body = document.querySelector("body")
let allNodes = body.querySelectorAll("*")

for (x of allNodes)
console.log(x.nodeName)

// Harjoitus E
let article = document.querySelector("article")
for(i of article.querySelectorAll("p")){
    console.log("*" + i.textContent);
}

// Harjoitus F
for(i of allItems){
    i.textContent = "John Doe"
}

// Harjoitus G
// Tämä ei ole järkevä