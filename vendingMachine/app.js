const drinks = [
    { "name": "Cocacola", "quantity": 40 },
    { "name": "Fanta", "quantity": 80 },
    { "name": "Sprite", "quantity": 20 },
    { "name": "Pepsi", "quantity": 90 },
    { "name": "Dew", "quantity": 10 },
    { "name": "Mirinda", "quantity": 80 },
]
const names = document.querySelector(".name");
const quantity = document.querySelector(".quantity")
const menu = document.querySelector(".btn")
let show = document.querySelector(".menu")

menu.addEventListener('click', e => {
    e.preventDefault();
    drinks.map((drink) => {
        const html = `<p> ${drink.name}    ${drink.quantity}</p> <br/>`
        show.innerHTML += html
    })
})

function Drink(name, quantity) {
    this.name = name;
    this.quantity = quantity;
}

drinks.map((drink) => {
    const drk = new Drink("drink.name", "drink.quantity")
    console.log(drink);

    names.addEventListener('change', e => {
        quantity.addEventListener('change', () => {
            e.preventDefault();
            if (names.value === drink.name) {
                drink.quantity = drink.quantity - (quantity.value)
                show.style.display = "none"
                console.log(drink.quantity)
            }
            else{
                show.innerHTML = "Drink notfound"
            }
        })
    })
})


