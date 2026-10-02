"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
const ask = require('readline-sync');
class Producer {
    constructor(name, CPF, quantityOfFoodProduced) {
        this.name = name;
        this.CPF = CPF;
        this.quantityOfFoodProduced = quantityOfFoodProduced;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCPF() {
        return this.CPF;
    }
    setCPF(CPF) {
        this.CPF = CPF;
    }
    getQuantityOfFoodProduced() {
        return this.quantityOfFoodProduced;
    }
    setQuantityOfFoodProduced(quantityOfFoodProduced) {
        this.quantityOfFoodProduced = quantityOfFoodProduced;
    }
}
exports.Producer = Producer;
