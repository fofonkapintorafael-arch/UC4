import { Exploratory } from "../interfaces/Exploratory";
import { SpaceCraft } from "./Spacecraft";

export class ExplorationShip extends SpaceCraft implements Exploratory {
    public constructor(id: number, name: string, fuel: number) {
       super(id, name, fuel)
    }

    public explore(location: string): string {
        this.fuelConsumption(25)

        return `the spacecraft began its journey to ${location}!`
    }

    public collectData(): string {
        return `Scientific data were collected during this expedition!`

    }
}