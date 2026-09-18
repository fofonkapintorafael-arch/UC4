"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(name, number, capacity) {
        this.name = name.toUpperCase();
        this.number = number;
        this.capacity = capacity;
        this.residents = [];
    }
    addResident(resident) {
        if (this.residents.length >= this.capacity) {
            console.log(`VERIFICAÇÃO: limiti atingido!!!`);
            return;
        }
        this.residents.push(resident);
    }
    removeResident(resident) {
        const index = this.residents.indexOf(resident);
        if (index === -1) {
            console.log(`Resident não encontrado`);
            return;
        }
        this.residents.splice(index, 1);
        console.log(`Resident encontrado!`);
    }
    showResidents() {
        console.log(`
        ======== INFORMATION ROOM ========
                    ${this.name}
                       ${this.number}
        ==================================
        
        RESIDENTS:
        `);
        for (const resident of this.residents) {
            resident.showInformation();
        }
    }
}
exports.Room = Room;
