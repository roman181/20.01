// server/anticheats/hitValidation.js

class HitValidation {
    constructor() {
        this.players = new Map(); // Used to store player data
    }

    // Method to register a player
    registerPlayer(playerId) {
        if (!this.players.has(playerId)) {
            this.players.set(playerId, { hits: 0, lastHitTime: 0 });
        }
    }

    // Method to validate a hit
    validateHit(playerId, hitTime) {
        const playerData = this.players.get(playerId);
        if (!playerData) return false; // Player not registered

        // Check if the hit is legitimate based on time
        if (hitTime - playerData.lastHitTime < 100) {
            // Hit detected too quickly
            return false;
        }

        // Update player data
        playerData.hits += 1;
        playerData.lastHitTime = hitTime;
        return true;
    }

    // Method to get player stats
    getPlayerStats(playerId) {
        return this.players.get(playerId);
    }
}

module.exports = HitValidation;