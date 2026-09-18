import { Resident } from "./Resident";

export class Room {
    private name: string;
    private number: number;
    private capacity: number;
    private residents: Resident[]

    public constructor(name: string, number: number, capacity: number) {
        this.name = name.toUpperCase();
        this.number = number;
        this.capacity = capacity
        this.residents = []
    }

    public addResident(resident: Resident): void {
        if (this.residents.length >= this.capacity) {
            console.log(`VERIFICAÇÃO: limiti atingido!!!`);
            return;
        }

        this.residents.push(resident)
    }

    public removeResident(resident: Resident): void {
        const index = this.residents.indexOf(resident)

        if(index === -1) {
            console.log(`Resident não encontrado`);
            return;
        }

        this.residents.splice(index, 1);
        console.log(`Resident encontrado!`)
    }

    public showResidents(): void {
        console.log(`
        ======== INFORMATION ROOM ========
                    ${this.name}
                       ${this.number}
        ==================================
        
        RESIDENTS:
        `)

        for (const resident of this.residents) {
            resident.showInformation()
        }
    }
}