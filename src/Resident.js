"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resident = void 0;
const ask = require('readline-sync');
class Resident {
    constructor() {
        this.name = "";
        this.age = 0;
        this.gender = "";
    }
    registerResident() {
        this.name = ask.question(`escreva seu nome: `);
        this.age = Number(ask.question(`escreva sua idade: `));
        this.gender = ask.question(`escreva seu genero: `);
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setGender(gender) {
        this.gender = gender;
    }
    residentWork() {
        console.log(`O morador ${this.name} esta trabalhando!!`);
    }
    showInformation() {
        console.log(`
        ======= INFORMATION =======
        Name: ${this.name}
        Age: ${this.age}
        Gender: ${this.gender}
        ===========================    
            `);
    }
}
exports.Resident = Resident;
