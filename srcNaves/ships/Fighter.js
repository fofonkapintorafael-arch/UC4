"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const Spacecraft_1 = require("./Spacecraft");
class Fighter extends Spacecraft_1.SpaceCraft {
    constructor(weaponPower, id, name, fuel) {
        super(id, name, fuel);
        this.weaponPower = weaponPower;
    }
    attack(target) {
        if (!this.isOperational()) {
            return 0;
        }
        const damage = this.weaponPower;
        target.takeDamage(damage);
        return damage;
    }
    repair() {
        this.health += 25;
        if (this.health >= 100) {
            this.health = 100;
        }
    }
    getRepairCost() {
        return 35;
    }
}
exports.Fighter = Fighter;
