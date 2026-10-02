import { CargoCarrier } from "../interfaces/CargoCarrier";
import { SpaceCraft } from "./Spacecraft";

export class TransportShip extends SpaceCraft implements CargoCarrier {
    private cargoCapacity: number;
    private currentCargo: number;

    public constructor(cargoCapacity: number, id: number, name: string, fuel: number) {
        super(id, name, fuel)
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
    }

    public loadCargo(amount: number): void {
        if (this.currentCargo + amount >= this.cargoCapacity) {
            this.currentCargo = this.cargoCapacity
        } else {
            this.currentCargo += amount;
        }
    }

    public unloadCargo(amount: number): void {
        if (this.currentCargo - amount <= 0) {
            this.currentCargo = 0
        } else {
            this.currentCargo -= amount
        }
    }

    public getCargoCapacity(): number {
        return this.cargoCapacity
    }
    
    public getCurrentCargo(): number {
        return this.currentCargo
    }
}1