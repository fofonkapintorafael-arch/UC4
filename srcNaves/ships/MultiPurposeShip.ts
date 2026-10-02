import { SpaceCraft } from "./Spacecraft";
import { CombatCapable } from "../interfaces/CombatCapable";
import { CargoCarrier } from "../interfaces/CargoCarrier";
import { Exploratory } from "../interfaces/Exploratory";
import { Repairable } from "../interfaces/Repairable";

export class MultiPurposeShip extends SpaceCraft implements CombatCapable, CargoCarrier, Exploratory, Repairable {
    private cargoCapacity: number;
    private currentCargo: number;
    private weaponPower: number;

    public constructor(id: number, name: string, fuel: number, cargoCapacity: number, weaponPower: number) {
        super(id, name, fuel);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
        this.weaponPower = weaponPower
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

    public explore(location: string): string {
        this.fuelConsumption(25)

        return `the spacecraft began its journey to ${location}!`
    }

    public collectData(): string {
        return `Scientific data were collected during this expedition!`

    }

     public attack(target: SpaceCraft): number {
      if(!this.isOperational()){
        return 0
      }

      const damage = this.weaponPower

      target.takeDamage(damage);

      return damage;
    }

    public repair(): void {
    this.health += 25
    if(this.health >= 100){
      this.health = 100
    }
  }

   public getRepairCost(): number {
    return 35
  }
}