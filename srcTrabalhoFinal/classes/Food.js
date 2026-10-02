"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, category, quantityKg, responsibleProducer) {
        this.name = name;
        this.category = category;
        this.quantityKg = quantityKg;
        this.responsibleProducer = responsibleProducer;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
    }
    getAvailableQuantityKg() {
        return this.quantityKg;
    }
    setAvailableQuantityKg(availableQuantityKg) {
        this.quantityKg = availableQuantityKg;
    }
    getResponsibleProducer() {
        return this.responsibleProducer;
    }
    setResponsibleProducer(responsibleProducer) {
        this.responsibleProducer = responsibleProducer;
    }
    addQuantity(quantity) {
        if (quantity <= 0) {
            return;
        }
        this.quantityKg += quantity;
    }
    removeQuantity(quantity) {
        if (quantity <= 0) {
            return;
        }
        this.quantityKg -= quantity;
        if (this.quantityKg <= 0) {
            this.quantityKg = 0;
            throw new Error(`The reduced amount cannot be less than or equal to zero!`);
        }
    }
    donate(quantity) {
        if (quantity <= 0) {
            return;
        }
        if (quantity > this.quantityKg) {
            console.log(`Not a sufficient amount of food.`);
            return;
        }
        this.quantityKg -= quantity;
    }
    AvailableQuantity() {
        console.log(`
╔══════════════════════════════════════╗
║          FOOD INFORMATION            ║
╠══════════════════════════════════════╣
║ Food: ${this.name}
║ Category: ${this.category}
║ Available: ${this.quantityKg} kg
║ Responsible producer: ${this.responsibleProducer.getName()}
╚══════════════════════════════════════╝
`);
    }
}
exports.Food = Food;
