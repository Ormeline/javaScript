// classes - challenge

class Candy {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getName() {
      return this.name;
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class ShoppingBasket {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }
  }

  const candy = new Candy('Mars', 4.99);
  console.log(candy.getName()); 
  console.log(candy.getPrice()); 
  
  const basket = new ShoppingBasket();
  console.log(basket.getTotalPrice()); 
  
  basket.addItem(candy);
  console.log(basket.getTotalPrice()); 
  
  basket.addItem(new Candy('Skittle', 3.99));
  basket.addItem(new Candy('Skittle', 3.99));
  console.log(basket.getTotalPrice()); 

  module.exports = Candy;

  // to run this in node type const Candy  = require('./Candy');