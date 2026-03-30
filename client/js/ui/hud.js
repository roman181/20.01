// HUD display class
class HUD {
    constructor() {
        this.health = 100;
        this.ammo = 30;
        this.money = 0;
        this.experience = 0;
        this.socket = io(); // Initialize socket connection
        this.setupSocketEvents();
    }

    setupSocketEvents() {
        this.socket.on('updateHealth', (health) => this.updateHealth(health));
        this.socket.on('updateAmmo', (ammo) => this.updateAmmo(ammo));
        this.socket.on('updateMoney', (money) => this.updateMoney(money));
        this.socket.on('updateExperience', (experience) => this.updateExperience(experience));
    }

    updateHealth(health) {
        this.health = health;
        this.refreshUI();
    }

    updateAmmo(ammo) {
        this.ammo = ammo;
        this.refreshUI();
    }

    updateMoney(money) {
        this.money = money;
        this.refreshUI();
    }

    updateExperience(experience) {
        this.experience = experience;
        this.refreshUI();
    }

    refreshUI() {
        document.getElementById('health').innerText = `Health: ${this.health}`;
        document.getElementById('ammo').innerText = `Ammo: ${this.ammo}`;
        document.getElementById('money').innerText = `Money: ${this.money}`;
        document.getElementById('experience').innerText = `Experience: ${this.experience}`;
    }
}

// Initialize HUD instance
const hud = new HUD();
