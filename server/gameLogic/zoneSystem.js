// zoneSystem.js

const GangTerritory = function(name, description) {
    this.name = name;
    this.description = description;
    this.controlledBy = null;
};

GangTerritory.prototype.capture = function(gang) {
    this.controlledBy = gang;
    console.log(`${gang} has captured ${this.name}`);
};

const Zone = function(name) {
    this.name = name;
    this.territories = [];
};

Zone.prototype.addTerritory = function(territory) {
    this.territories.push(territory);
};

Zone.prototype.captureTerritory = function(territoryName, gang) {
    const territory = this.territories.find(t => t.name === territoryName);
    if (territory) {
        territory.capture(gang);
    } else {
        console.log(`Territory ${territoryName} not found in zone ${this.name}`);
    }
};

// Example usage
const myZone = new Zone('Downtown');
const gangA = new GangTerritory('Gang A', 'Northeast area of Downtown');
const gangB = new GangTerritory('Gang B', 'Southeast area of Downtown');

myZone.addTerritory(gangA);
myZone.addTerritory(gangB);

// Capture a territory
myZone.captureTerritory('Gang A', 'Gang A'); // Output: Gang A has captured Gang A
myZone.captureTerritory('Gang B', 'Gang B'); // Output: Gang B has captured Gang B

module.exports = { GangTerritory, Zone };