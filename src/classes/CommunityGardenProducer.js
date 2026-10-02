"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
class CommunityGardenProducer extends Producer_1.Producer {
    constructor(name, CPF, quantityOfFoodProduced, numberOfVolunteers) {
        super(name, CPF, quantityOfFoodProduced);
        this.numberOfVolunteers = numberOfVolunteers;
    }
    getNumberOfVolunteers() {
        return this.numberOfVolunteers;
    }
    setNumberOfVolunteers(numberOfVolunteers) {
        this.numberOfVolunteers = numberOfVolunteers;
    }
    present() {
        console.log(`
╔══════════════════════════════════════╗
║      COMMUNITY GARDEN PRODUCER       ║
╠══════════════════════════════════════╣
║ Name: ${this.getName()}
║ CPF: ${this.getCPF()}
║ Food produced: ${this.getQuantityOfFoodProduced()} kg
║ Number of volunteers: ${this.getNumberOfVolunteers()}
╚══════════════════════════════════════╝
    `);
    }
}
exports.CommunityGardenProducer = CommunityGardenProducer;
