import { Food } from "./Food";

export class Institution {
    private name: string;
    private address: string;
    private numberOfPeopleServed: number;
    private totalFoodReceivedKg: number;
    private foods: Food[];

    constructor(name: string, address: string, numberOfPeopleServed: number) {
        this.name = name;
        this.address = address;
        this.numberOfPeopleServed = numberOfPeopleServed;
        this.totalFoodReceivedKg = 0;
        this.foods = [];
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    getNumberOfPeopleServed(): number {
        return this.numberOfPeopleServed;
    }

    setNumberOfPeopleServed(numberOfPeopleServed: number): void {
        this.numberOfPeopleServed = numberOfPeopleServed;
    }

    public receiveFood(food: Food, quantityKg: number): void {
        if (quantityKg <= 0) {
            return;
        }

        if (quantityKg > food.getAvailableQuantityKg()) {
            console.log("Not enough food available for this donation.");
            return;
        }

        const existingFood = this.foods.find(
            item => item.getName() === food.getName()
        );

        if (existingFood) {
            existingFood.addQuantity(quantityKg);
        } else {
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