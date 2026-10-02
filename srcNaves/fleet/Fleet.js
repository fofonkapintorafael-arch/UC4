"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fleet = void 0;
const Fighter_1 = require("../ships/Fighter");
const TransportShip_1 = require("../ships/TransportShip");
const ExplorationShip_1 = require("../ships/ExplorationShip");
const MultiPurposeShip_1 = require("../ships/MultiPurposeShip");
class Fleet {
    constructor() {
        this.spaceCraft = [];
        this.spaceCraft = [];
    }
    addShip(ship) {
        this.spaceCraft.push(ship);
    }
    removeShip(id) {
        for (let i = 0; i < this.spaceCraft.length; i++) {
            if (this.spaceCraft[i].getId() === id) {
                this.spaceCraft.splice(i, 1);
                return;
            }
        }
    }
    findShip(id) {
        for (let i = 0; i < this.spaceCraft.length; i++) {
            if (this.spaceCraft[i].getId() === id) {
                return this.spaceCraft[i];
            }
        }
        return undefined;
    }
    showFleet() {
        console.log(`
╔══════════════════════════════════════╗
║               🚀 FLEET              ║
╚══════════════════════════════════════╝
        `);
        for (const ship of this.spaceCraft) {
            ship.showStatus();
        }
    }
    getCombatShips() {
        const ships = [];
        for (const ship of this.spaceCraft) {
            if (ship instanceof Fighter_1.Fighter || ship instanceof MultiPurposeShip_1.MultiPurposeShip) {
                ships.push(ship);
            }
        }
        return ships;
    }
    getCargoShips() {
        const ships = [];
        for (const ship of this.spaceCraft) {
            if (ship instanceof TransportShip_1.TransportShip || ship instanceof MultiPurposeShip_1.MultiPurposeShip) {
                ships.push(ship);
            }
        }
        return ships;
    }
    getExplorationShips() {
        const ships = [];
        for (const ship of this.spaceCraft) {
            if (ship instanceof ExplorationShip_1.ExplorationShip || ship instanceof MultiPurposeShip_1.MultiPurposeShip) {
                ships.push(ship);
            }
        }
        return ships;
    }
}
exports.Fleet = Fleet;
