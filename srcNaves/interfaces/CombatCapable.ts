import { SpaceCraft } from "../ships/Spacecraft";

export interface CombatCapable {
    attack(target: SpaceCraft): number;
}