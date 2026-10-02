"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
class Institution {
    constructor(name, address, numberOfPeopleServed) {
        this.name = name;
        this.address = address;
        this.numberOfPeopleServed = numberOfPeopleServed;
        this.totalFoodReceivedKg = 0;
        this.foods = [];
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getNumberOfPeopleServed() {
        return this.numberOfPeopleServed;
    }
    setNumberOfPeopleServed(numberOfPeopleServed) {
        this.numberOfPeopleServed = numberOfPeopleServed;
    }
    receiveFood(food, quantityKg) {
        if (quantityKg <= 0) {
            return;
        }
        if (quantityKg > food.getAvailableQuantityKg()) {
            console.log("Not enough food available for this donation.");
            return;
        }
        const existingFood = this.foods.find(item => item.getName() === food.getName());
        if (existingFood) {
            existingFood.addQuantity(quantityKg);
        }
        else {
            this.foods.push(food);
        }
        food.removeQuantity(quantityKg);
        this.totalFoodReceivedKg += quantityKg;
        console.log(`
╔══════════════════════════════════════╗
║     FOOD RECEIVED BY INSTITUTION     ║
╠══════════════════════════════════════╣
║ Food: ${food.getName()}
║ Category: ${food.getCategory()}
║ Quantity: ${quantityKg} kg
║ Total received: ${this.totalFoodReceivedKg} kg
╚══════════════════════════════════════╝
    `);
    }
}
exports.Institution = Institution;
