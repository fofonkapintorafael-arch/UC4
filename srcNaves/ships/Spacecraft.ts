export abstract class SpaceCraft {
    private id: number;
    private name: string;
    private fuel: number;
    protected health: number;

    public constructor(id: number, name: string, fuel: number) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        this.health = 100;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getFuel(): number {
        return this.fuel;
    }

    public getHealth(): number {
        return this.health;
    }

    public refuel(): number {
        return this.fuel += 25
    }

    public fuelConsumption(value: number): void {
        this.fuel -= value
        if (this.fuel <= 0) {
            this.fuel = 0
        }
    }

    public takeDamage(value: number): void {
        this.health -= value
        if (this.health <= 0) {
            this.health = 0
        }
    }
    
    public isOperational(): boolean {
        if (this.health > 0 && this.fuel > 0) {
            console.log(`Health: OK`);
            console.log(`Fuel: OK`);
            return true
        }
        return false
    }

    public showStatus() {
        console.log(`
┌──────────────────────────────────────┐
│            SHIP STATUS               │
├──────────────────────────────────────┤
  ID       : ${this.getId()}
  Name     : ${this.getName()}
  Fuel     : ${this.getFuel()}
  Health   : ${this.getHealth()}
└──────────────────────────────────────┘
`);
    }
}