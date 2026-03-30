// player.js

class Player {
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this.level = level;
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) this.health = 0;  // Prevent negative health
    }

    heal(amount) {
        this.health += amount;
    }

    levelUp() {
        this.level += 1;
        this.health += 10;  // Increase health on level up
    }
}

class CharacterManagement {
    constructor() {
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    removePlayer(playerName) {
        this.players = this.players.filter(player => player.name !== playerName);
    }

    getPlayer(playerName) {
        return this.players.find(player => player.name === playerName);
    }
}

// Example Usage:
const characterManagement = new CharacterManagement();
const player1 = new Player('Hero', 100, 1);
characterManagement.addPlayer(player1);
const player2 = new Player('Villain', 80, 1);
characterManagement.addPlayer(player2);
