let bgContainerEl = document.createElement("div")
bgContainerEl.classList.add("bg-container")
document.body.appendChild(bgContainerEl)

let heading = document.createElement("h1")
heading.textContent = "Grocery List"
heading.classList.add("head")
bgContainerEl.appendChild(heading)

let listItems = document.createElement("ul")
listItems.classList.add("items")
bgContainerEl.appendChild(listItems)

let GroceryItems=["Milk","Peanut Butter","Choco Chips","Tomato Sauce","Cup Cakes","Noodles"]

for (let eachItem of GroceryItems) {
    let listCont = document.createElement("li")
listCont.textContent = eachItem
listItems.appendChild(listCont)
}

let inputEl = document.createElement("input")
inputEl.type = "checkbox"
inputEl.id="delivary"
bgContainerEl.appendChild(inputEl)

let labelEl=document.createElement("label")
labelEl.textContent = "Need Home Delivary"
labelEl.setAttribute("for", "delivary")
labelEl.classList.add("label")
bgContainerEl.appendChild(labelEl)

let breakLine = document.createElement("br")
bgContainerEl.appendChild(breakLine)

let buttonEl = document.createElement("button")
buttonEl.textContent = "Proceed to pay"
buttonEl.classList.add("btn")
bgContainerEl.appendChild(buttonEl)

let a = 5;
let b = 5;
console.log(a + b);












