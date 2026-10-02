import { Producer } from "./Producer";

export class CommunityGardenProducer extends Producer {
    private numberOfVolunteers: number;

    constructor(
        name: string,
        CPF: number,
        quantityOfFoodProduced: number,
        numberOfVolunteers: number
    ) {
        super(name, CPF, quantityOfFoodProduced);
        this.numberOfVolunteers = numberOfVolunteers;
    }

    getNumberOfVolunteers(): number {
        return this.numberOfVolunteers;
    }

    setNumberOfVolunteers(numberOfVolunteers: number): void {
        this.numberOfVolunteers = numberOfVolunteers;
    }

    public present(): void {
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