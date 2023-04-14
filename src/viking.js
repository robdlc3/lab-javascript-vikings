// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        //this.Saxon.receiveDamage(health) = this.Viking.strength;
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let attackRes = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength)
        if (this.saxonArmy[saxonIndex].health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1)
        }
        return attackRes;
    }

    saxonAttack() {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let attackRes = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength)
        if (this.vikingArmy[vikingIndex].health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1)
        }
        return attackRes
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!'
        }
        if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        if (this.vikingArmy.length >= 1 &&
            this.saxonArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}