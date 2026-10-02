import { SpaceCraft } from "./Spacecraft";
import { CombatCapable } from "../interfaces/CombatCapable";
import { Repairable } from "../interfaces/Repairable";

export class Fighter extends SpaceCraft implements CombatCapable, Repairable {
  private weaponPower: number;

  public constructor(weaponPower: number, id: number, name: string, fuel: number) {
    super(id, name, fuel)
    this.weaponPower = weaponPower;
  }

  public attack(target: SpaceCraft): number {
    if (!this.isOperational()) {
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