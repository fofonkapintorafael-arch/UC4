"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPurposeShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class MultiPurposeShip extends Spacecraft_1.SpaceCraft {
    constructor(id, name, fuel, cargoCapacity, weaponPower) {
        super(id, name, fuel);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
        this.weaponPower = weaponPower;
    }
    loadCargo(amount) {
        if (this.currentCargo + amount >= this.cargoCapacity) {
            this.currentCargo = this.cargoCapacity;
        }
        else {
            this.currentCargo += amount;
        }
    }
    unloadCargo(amount) {
        if (this.currentCargo - amount <= 0) {
            this.currentCargo = 0;
        }
        else {
            this.currentCargo -= amount;
        }
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
    getCurrentCargo() {
        return this.currentCargo;
    }
    explore(location) {
        this.fuelConsumption(25);
        return `the spacecraft began its journey to ${location}!`;
    }
    collectData() {
        return `Scientific data were collected during this expedition!`;
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
exports.MultiPurposeShip = MultiPurposeShip;
