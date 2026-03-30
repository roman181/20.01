// weaponSystem.js
// Server-side weapon balancing and damage calculation

class Weapon {
    constructor(name, baseDamage, range) {
        this.name = name;
        this.baseDamage = baseDamage;
        this.range = range;
    }

    calculateDamage(distance) {
        // Simple damage calculation based on distance
        if (distance > this.range) {
            return 0; // No damage beyond range
        }
        // Decrease damage based on distance (linear model)
        return this.baseDamage * (1 - (distance / this.range));
    }
}

class WeaponSystem {
    constructor() {
        this.weapons = {};
    }

    addWeapon(weapon) {
        this.weapons[weapon.name] = weapon;
    }

    getWeapon(name) {
        return this.weapons[name];
    }

    calculateTotalDamage(name, distance) {
        const weapon = this.getWeapon(name);
        if (weapon) {
            return weapon.calculateDamage(distance);
        }
        return 0;
    }
}

// Example usage:
const weaponSystem = new WeaponSystem();
const sword = new Weapon('Sword', 50, 5);
const bow = new Weapon('Bow', 30, 15);

weaponSystem.addWeapon(sword);
weaponSystem.addWeapon(bow);

// calculate damage at different distances
console.log(weaponSystem.calculateTotalDamage('Sword', 3)); // 30
console.log(weaponSystem.calculateTotalDamage('Bow', 10)); // 20
console.log(weaponSystem.calculateTotalDamage('Bow', 20)); // 0
