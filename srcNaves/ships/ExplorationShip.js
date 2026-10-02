"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorationShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class ExplorationShip extends Spacecraft_1.SpaceCraft {
    constructor(id, name, fuel) {
        super(id, name, fuel);
    }
    explore(location) {
        this.fuelConsumption(25);
        return `the spacecraft began its journey to ${location}!`;
    }
    collectData() {
        return `Scientific data were collected during this expedition!`;
    }
}
exports.ExplorationShip = ExplorationShip;
