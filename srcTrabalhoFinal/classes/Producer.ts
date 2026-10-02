const ask = require('readline-sync');

export abstract class Producer {
    private name: string;
    private CPF: number;
    private quantityOfFoodProduced: number;

    constructor(name: string, CPF: number, quantityOfFoodProduced: number) {
        this.name = name;
        this.CPF = CPF;
        this.quantityOfFoodProduced = quantityOfFoodProduced;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCPF(): number {
        return this.CPF;
    }

    setCPF(CPF: number): void {
        this.CPF = CPF;
    }

    getQuantityOfFoodProduced(): number {
        return this.quantityOfFoodProduced;
    }

    setQuantityOfFoodProduced(quantityOfFoodProduced: number): void {
        this.quantityOfFoodProduced = quantityOfFoodProduced;
    }
    
    public abstract present(): void;
}