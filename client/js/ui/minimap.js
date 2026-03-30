// Minimap and Zone Territory Display System

class Minimap {
    constructor() {
        this.territories = [];
    }

    addTerritory(territory) {
        this.territories.push(territory);
    }

    render() {
        console.log('Rendering minimap...');
        this.territories.forEach(territory => {
            console.log(`Territory: ${territory.name}, Coordinates: (${territory.coordinates.x}, ${territory.coordinates.y})`);
        });
    }
}

class Territory {
    constructor(name, coordinates) {
        this.name = name;
        this.coordinates = coordinates;
    }
}

// Example Usage
const minimap = new Minimap();
minimap.addTerritory(new Territory('Zone A', {x: 10, y: 15}));
minimap.addTerritory(new Territory('Zone B', {x: 20, y: 25}));
minimap.render();