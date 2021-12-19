// a. Change h2 header content to “Let’s manipulate some DOM again!”
let h2 =document.querySelector("h2")
h2.textContent = "Let’s manipulate some DOM again!"

/* b. Add horizontal line before the header
let hr = document.createElement("hr")
h2.parentElement.insertBefore(hr,h2)*/

// c. Change text content between the first and last p element inside article.
let article = document.querySelector("article")
let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
p1.textContent = p2.textContent
p2.textContent = temp

/*d. Add unordered list inside element of id=“content” with 5 list items. Each item contains text
and number like this. Use for-loop to set numbering.*/
let content = document.getElementById("content")
let ul = document.createElement("ul")
content.appendChild(ul)

for(let i = 1; i < 6; i++){
    let li = document.createElement("li")
    li.textContent = "Number" + i
    ul.appendChild(li)
}


// e. Construct next table in the end of div that has id=“content”
let document = document.createElement("table")

let rows =[document.createElement("tr"),document.createElement("tr")]
let ths = [document.createElement("th"),document.createElement("th")]
let tds = [document.createElement("td"),document.createElement("td")]

ths[0].textContent = "First Name"
ths[1].textContent = "Last Name"

ths[0].textContent = "John"
ths[1].textContent = "Doe"
rows[0].append(ths[0], ths[1])
rows[1].append(tds[0], tds[1])

table.append(rows[0],rows[1])

document.getElementById("content").appendChild(table)

// f. Add horizontal line before each child of id=”content”
let elems = document.querySelectorAll("#content>*")

for (const e of elems) {
    let hr = document.createElement("hr")

    e.parentElement.insertBefore(hr, e)
}

// g.
elems = document.querySelectorAll("div>p:first-child")
let span = document.createElement("span")
span.textContent= "***"
console.log(elems)