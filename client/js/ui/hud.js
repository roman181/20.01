class HUD {
    constructor() {
        this.health = 100;
        this.ammo = 30;
        this.money = 0;
    }

    updateHealth(newHealth) {
        this.health = newHealth;
        this.render();
    }

    updateAmmo(newAmmo) {
        this.ammo = newAmmo;
        this.render();
    }

    updateMoney(newMoney) {
        this.money = newMoney;
        this.render();
    }

    render() {
        console.log(`Health: ${this.health}, Ammo: ${this.ammo}, Money: $${this.money}`);
    }
}

// Example usage:
const hud = new HUD();
hud.updateHealth(80);
hud.updateAmmo(25);
hud.updateMoney(150);
