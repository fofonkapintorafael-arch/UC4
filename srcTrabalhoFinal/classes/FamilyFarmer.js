"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
class FamilyFarmer extends Producer_1.Producer {
    constructor(name, CPF, quantityOfFoodProduced, propertySize) {
        super(name, CPF, quantityOfFoodProduced);
        this.propertySize = propertySize;
    }
    getPropertySize() {
        return this.propertySize;
    }
    setPropertySize(propertySize) {
        this.propertySize = propertySize;
    }
    present() {
        console.log(`
╔══════════════════════════════════════╗
║           FAMILY FARMER              ║
╠══════════════════════════════════════╣
║ Name: ${this.getName()}
║ CPF: ${this.getCPF()}
║ Food produced: ${this.getQuantityOfFoodProduced()} kg
║ Property size: ${this.getPropertySize()} hectares
╚══════════════════════════════════════╝
    `);
    }
}
exports.FamilyFarmer = FamilyFarmer;
