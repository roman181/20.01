// shop.js

class Shop {
    constructor() {
        this.inventory = [];
        this.cart = [];
    }

    addItem(item) {
        this.inventory.push(item);
    }

    viewInventory() {
        return this.inventory;
    }

    addToCart(item) {
        if (this.inventory.includes(item)) {
            this.cart.push(item);
        } else {
            console.log('Item not in inventory');
        }
    }

    viewCart() {
        return this.cart;
    }

    purchase() {
        if (this.cart.length === 0) {
            console.log('Cart is empty');
            return;
        }
        console.log('Purchasing:', this.cart);
        this.cart = [];
    }
}

// Example usage:
const shop = new Shop();
shop.addItem('AK-47 Skin');
shop.addItem('M4A4 Skin');

console.log(shop.viewInventory()); // View available skins
shop.addToCart('AK-47 Skin'); // Add to cart
console.log(shop.viewCart()); // View cart
shop.purchase(); // Purchase items
