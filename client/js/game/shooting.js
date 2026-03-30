// shooting.js

class ShootingGame {
  constructor() {
    this.players = [];
    this.bullets = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  shoot(player) {
    const bullet = new Bullet(player);
    this.bullets.push(bullet);
  }

  detectCollision() {
    for (let bullet of this.bullets) {
      for (let player of this.players) {
        if (bullet.isCollidingWith(player)) {
          player.takeDamage(bullet.damage);
          // Remove bullet after hit
          this.removeBullet(bullet);
        }
      }
    }
  }

  removeBullet(bullet) {
    this.bullets = this.bullets.filter(b => b !== bullet);
  }
}

class Bullet {
  constructor(player) {
    this.damage = 10;
    this.position = player.position;
    this.direction = player.direction;
  }

  isCollidingWith(player) {
    // Add collision detection logic here
    return this.position.x === player.position.x && this.position.y === player.position.y;
  }
}

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.health = 100;
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated!`);
    }
  }
}