"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class TransportShip extends Spacecraft_1.SpaceCraft {
    constructor(cargoCapacity, id, name, fuel) {
        super(id, name, fuel);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
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
}
exports.TransportShip = TransportShip;
1;
