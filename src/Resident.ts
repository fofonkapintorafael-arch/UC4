const ask = require('readline-sync')

export class Resident {
    private name: string;
    private age: number;
    private gender: string;

    public constructor() {
        this.name = ""
        this.age = 0
        this.gender = ""
    }

    public registerResident(): void {
        this.name = ask.question(`escreva seu nome: `);
        this.age = Number(ask.question(`escreva sua idade: `));
        this.gender = ask.question(`escreva seu genero: `);
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getGender(): string {
        return this.gender
    }

    public setName(name: string): void {
        this.name = name
    }

    public setAge(age: number): void {
        this.age = age
    }

    public setGender(gender: string): void {
        this.gender = gender
    }

    public residentWork(): void {
        console.log(`O morador ${this.name} esta trabalhando!!`)
    }

    public showInformation() {
        console.log(`
        ======= INFORMATION =======
        Name: ${this.name}
        Age: ${this.age}
        Gender: ${this.gender}
        ===========================    
            `)
    }
}