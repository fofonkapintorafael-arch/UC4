"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supervisor = void 0;
const Resident_1 = require("./Resident");
class Supervisor extends Resident_1.Resident {
    constructor() {
        super();
        this.room = [];
        this.resident = [];
    }
    createRoom(name, number, capacity) {
        console.log(`
        ===================
        Name room: ${name}
        Number room: ${number}
        Capacity: ${capacity}
        ===================
        `);
    }
    createResident() {
        this.registerResident();
    }
    listResidents() {
    }
}
exports.Supervisor = Supervisor;
