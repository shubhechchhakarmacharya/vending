// function drink(){
//     const drinks = [
//         { "name": "Cocacola", "quantity": 40 },
//         { "name": "Fanta", "quantity": 80 },
//         { "name": "Sprite", "quantity": 20 },
//         { "name": "Pepsi", "quantity": 90 },
//         { "name": "Dew", "quantity": 10 },
//         { "name": "Mirinda", "quantity": 80 },
//     ]
//     const names = document.querySelector(".name");
//     const quantity = document.querySelector(".quantity")
//     const menu = document.querySelector(".btn")
//     let show = document.querySelector(".menu")
    
//     menu.addEventListener('click', e => {
//         e.preventDefault();
//         drinks.map((drink) => {
//             const html = `<p> ${drink.name}    ${drink.quantity}</p> <br/>`
//             show.innerHTML += html
//         })
//     })
    
//     function Drink(name, quantity) {
//         this.name = name;
//         this.quantity = quantity;
//     }
    
//     drinks.map((drink) => {
//         const drk = new Drink("drink.name", "drink.quantity")
//         console.log(drink);
    
//         names.addEventListener('change', e => {
//             quantity.addEventListener('change', () => {
//                 e.preventDefault();
//                 if (names.value === drink.name) {
//                     drink.quantity = drink.quantity - (quantity.value)
//                     show.style.display = "none"
//                     console.log(drink.quantity)
//                 }
//                 else{
//                     show.innerHTML = "Drink notfound"
//                 }
//             })
//         })
//     })    
// }


//Using class 
const names = document.querySelector(".name");
const quantity = document.querySelector(".quantity");
const menu = document.querySelector(".btn");
const show = document.querySelector("tbody");
class Drink {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
  }
  
  const drinks = [
    new Drink("Cocacola", 40),
    new Drink("Fanta", 80),
    new Drink("Sprite", 20),
    new Drink("Pepsi", 90),
    new Drink("Dew", 10),
    new Drink("Mirinda", 80),
  ];

    drinks.map((drink,index) => {
      // let length = drinks.length;
      // console.log(drink)
      const html = `<tr>
      <td> ${index + 1} </td> 
        <td> ${drink.name} </td> 
        <td> ${drink.quantity} </td> 
            </tr>`;
      show.innerHTML += html;
    });
  
  names.addEventListener("change", (e) => {
    quantity.addEventListener("change", () => {
      e.preventDefault();
      let drinkFound = false;
      for (let i = 0; i < drinks.length; i++) {
        const drink = drinks[i];
        if (names.value === drink.name) {
          drink.quantity -= quantity.value;
          drinkFound = true;
          drinks.map((drink, index) => {
            const html = `<tr>
            <td> ${index} </td> 
              <td> ${names.value} </td> 
              <td> ${quantity.value} </td> 
                  </tr>`;
            show.innerHTML = html;
          });
          console.log(drink.quantity , drink.name)
          break;
        }
      }
      if (drinkFound) {
        console.log(drinks);
      } else {
        show.innerHTML = "Drink not found";
      }
    });
  });


  