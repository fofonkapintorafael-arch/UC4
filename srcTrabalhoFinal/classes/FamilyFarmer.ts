import { Producer } from "./Producer";

export class FamilyFarmer extends Producer {
    private propertySize: number;

    constructor(
        name: string,
        CPF: number,
        quantityOfFoodProduced: number,
        propertySize: number
    ) {
        super(name, CPF, quantityOfFoodProduced);
        this.propertySize = propertySize;
    }

    getPropertySize(): number {
        return this.propertySize;
    }

    setPropertySize(propertySize: number): void {
        this.propertySize = propertySize;
    }

    public present(): void {
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