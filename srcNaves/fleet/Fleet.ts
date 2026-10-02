import { SpaceCraft } from "../ships/Spacecraft";
import { Fighter } from "../ships/Fighter";
import { TransportShip } from "../ships/TransportShip";
import { ExplorationShip } from "../ships/ExplorationShip";
import { MultiPurposeShip } from "../ships/MultiPurposeShip";

import { CombatCapable } from "../interfaces/CombatCapable";
import { CargoCarrier } from "../interfaces/CargoCarrier";
import { Exploratory } from "../interfaces/Exploratory";

export class Fleet {
    private spaceCraft: SpaceCraft[] = [];

    public constructor() {
        this.spaceCraft = [];
    }

    public addShip(ship: SpaceCraft): void {
        this.spaceCraft.push(ship);
    }

    public removeShip(id: number): void {
        for (let i = 0; i < this.spaceCraft.length; i++) {
            if (this.spaceCraft[i].getId() === id) {
                this.spaceCraft.splice(i, 1);
                return;
            }
        }
    }

    public findShip(id: number): SpaceCraft | undefined {
        for (let i = 0; i < this.spaceCraft.length; i++) {
            if (this.spaceCraft[i].getId() === id) {
                return this.spaceCraft[i];
            }
        }

        return undefined;
    }

    public showFleet(): void {
        console.log(`
╔══════════════════════════════════════╗
║               🚀 FLEET              ║
╚══════════════════════════════════════╝
        `);

        for (const ship of this.spaceCraft) {
            ship.showStatus();
        }
    }

    public getCombatShips(): CombatCapable[] {
        const ships: CombatCapable[] = [];

        for (const ship of this.spaceCraft) {
            if (ship instanceof Fighter || ship instanceof MultiPurposeShip) {
                ships.push(ship);
            }
        }

        return ships;
    }

    public getCargoShips(): CargoCarrier[] {
        const ships: CargoCarrier[] = [];

        for (const ship of this.spaceCraft) {
            if (ship instanceof TransportShip || ship instanceof MultiPurposeShip) {
                ships.push(ship);
            }
        }

        return ships;
    }

    public getExplorationShips(): Exploratory[] {
        const ships: Exploratory[] = [];

        for (const ship of this.spaceCraft) {
            if (ship instanceof ExplorationShip || ship instanceof MultiPurposeShip) {
                ships.push(ship);
            }
        }

        return ships;
    }
}