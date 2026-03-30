class Character {
    constructor(name, model, animationStates, weaponType) {
        this.name = name;
        this.model = model;
        this.animationStates = animationStates;
        this.weaponType = weaponType;
    }

    loadModel() {
        // Logic to load the model
        console.log(`Loading model for ${this.name}: ${this.model}`);
    }

    setAnimation(state) {
        if (this.animationStates.includes(state)) {
            console.log(`${this.name} is now in ${state} state.`);
        } else {
            console.log(`Animation state ${state} is not valid for ${this.name}.`);
        }
    }

    equipWeapon(weapon) {
        if (weapon === this.weaponType) {
            console.log(`${this.name} equipped ${weapon}.`);
        } else {
            console.log(`${this.name} cannot equip ${weapon}, it uses ${this.weaponType}.`);
        }
    }
}

const pingWinn = new Character('Ping-Winn', 'model/ping-winn.glb', ['idle', 'run', 'jump'], 'sword');
const pepe = new Character('Pepe', 'model/pepe.glb', ['idle', 'run', 'wave'], 'none');
const pepa = new Character('Pepa', 'model/pepa.glb', ['idle', 'run', 'dance'], 'staff');

pingWinn.loadModel();  // Load model for Ping-Winn
pingWinn.setAnimation('run');  // Set running animation
pingWinn.equipWeapon('sword');  // Equip weapon
pepe.loadModel();  // Load model for Pepe
pepe.setAnimation('wave');  // Set waving animation
pepa.loadModel();  // Load model for Pepa
pepa.setAnimation('dance');  // Set dancing animation
