import { Producer } from "./Producer";
import { Donatable } from "../interfaces/Donatable";


export class Food implements Donatable {
    private name: string;
    private category: string;
    private quantityKg: number;
    private responsibleProducer: Producer;

    constructor(name: string, category: string, quantityKg: number, responsibleProducer: Producer) {
        this.name = name;
        this.category = category;
        this.quantityKg = quantityKg;
        this.responsibleProducer = responsibleProducer;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCategory(): string {
        return this.category;
    }

    setCategory(category: string): void {
        this.category = category;
    }

    getAvailableQuantityKg(): number {
        return this.quantityKg;
    }

    setAvailableQuantityKg(availableQuantityKg: number): void {
        this.quantityKg = availableQuantityKg;
    }

    getResponsibleProducer(): Producer {
        return this.responsibleProducer;
    }

    setResponsibleProducer(responsibleProducer: Producer): void {
        this.responsibleProducer = responsibleProducer;
    }

    public addQuantity(quantity: number): void {
        if (quantity <= 0) {
            return;
        }
        this.quantityKg += quantity
    }

    public removeQuantity(quantity: number): void {
        if (quantity <= 0) {
            return;
        }

        this.quantityKg -= quantity

        if (this.quantityKg <= 0) {
            this.quantityKg = 0
            throw new Error(`The reduced amount cannot be less than or equal to zero!`)
        }
    }

    public donate(quantity: number): void {
        if (quantity <= 0) {
            return;
        }

        if (quantity > this.quantityKg) {
            console.log(`Not a sufficient amount of food.`);
            return;
        }

        this.quantityKg -= quantity
    }

    public AvailableQuantity(): void {
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