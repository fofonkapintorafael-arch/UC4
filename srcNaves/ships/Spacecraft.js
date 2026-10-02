"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCraft = void 0;
class SpaceCraft {
    constructor(id, name, fuel) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        this.health = 100;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getFuel() {
        return this.fuel;
    }
    getHealth() {
        return this.health;
    }
    refuel() {
        return this.fuel += 25;
    }
    fuelConsumption(value) {
        this.fuel -= value;
        if (this.fuel <= 0) {
            this.fuel = 0;
        }
    }
    takeDamage(value) {
        this.health -= value;
        if (this.health <= 0) {
            this.health = 0;
        }
    }
    isOperational() {
        if (this.health > 0 && this.fuel > 0) {
            console.log(`Health: OK`);
            console.log(`Fuel: OK`);
            return true;
        }
        return false;
    }
    showStatus() {
        console.log(`
┌──────────────────────────────────────┐
│            SHIP STATUS               │
├──────────────────────────────────────┤
  ID       : ${this.getId()}
  Name     : ${this.getName()}
  Fuel     : ${this.getFuel()}
  Health   : ${this.getHealth()}
└──────────────────────────────────────┘
`);
    }
}
exports.SpaceCraft = SpaceCraft;
