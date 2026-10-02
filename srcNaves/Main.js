"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fighter_1 = require("./ships/Fighter");
const TransportShip_1 = require("./ships/TransportShip");
const ExplorationShip_1 = require("./ships/ExplorationShip");
const MultiPurposeShip_1 = require("./ships/MultiPurposeShip");
const Fleet_1 = require("./fleet/Fleet");
// ==========================
// CRIANDO AS NAVES
// ==========================
const fighter1 = new Fighter_1.Fighter(1, 1, "X-Wing", 100);
const fighter2 = new Fighter_1.Fighter(2, 2, "TIE Fighter", 100);
const transport1 = new TransportShip_1.TransportShip(3, 3, "Cargo One", 100);
const transport2 = new TransportShip_1.TransportShip(4, 4, "Cargo Two", 100);
const exploration1 = new ExplorationShip_1.ExplorationShip(5, "Explorer One", 100);
const exploration2 = new ExplorationShip_1.ExplorationShip(6, "Explorer Two", 100);
const multiPurpose = new MultiPurposeShip_1.MultiPurposeShip(7, "Enterprise", 100, 100, 30);
// ==========================
// CRIANDO A FROTA
// ==========================
const fleet = new Fleet_1.Fleet();
fleet.addShip(fighter1);
fleet.addShip(fighter2);
fleet.addShip(transport1);
fleet.addShip(transport2);
fleet.addShip(exploration1);
fleet.addShip(exploration2);
fleet.addShip(multiPurpose);
// ==========================
// 1. EXIBIR TODAS AS NAVES
// ==========================
console.log("===== FLEET =====");
fleet.showFleet();
// ==========================
// 2. REALIZAR COMBATE
// ==========================
console.log("\n===== COMBAT =====");
const damage = fighter1.attack(transport1);
console.log(`${fighter1.getName()} attacked ${transport1.getName()} and caused ${damage} damage.`);
// ==========================
// 3. TRANSPORTAR CARGA
// ==========================
console.log("\n===== CARGO =====");
transport1.loadCargo(200);
console.log(`${transport1.getName()} cargo: ${transport1.getCurrentCargo()}`);
transport1.unloadCargo(50);
console.log(`${transport1.getName()} cargo after unloading: ${transport1.getCurrentCargo()}`);
// ==========================
// 4. REALIZAR EXPLORAÇÃO
// ==========================
console.log("\n===== EXPLORATION =====");
console.log(exploration1.explore("Mars"));
console.log(exploration1.collectData());
// MultiPurpose também explora
console.log(multiPurpose.explore("Jupiter"));
console.log(multiPurpose.collectData());
// ==========================
// 5. CAUSAR DANO
// ==========================
console.log("\n===== DAMAGE =====");
fighter2.takeDamage(40);
fighter2.showStatus();
// ==========================
// 6. REPARAR NAVE
// ==========================
console.log("\n===== REPAIR =====");
fighter2.repair();
fighter2.showStatus();
// ==========================
// 7. RECUPERAR COMBUSTÍVEL
// ==========================
console.log("\n===== REFUEL =====");
fighter2.refuel();
fighter2.showStatus();
// ==========================
// 8. LISTAR NAVES DE COMBATE
// ==========================
console.log("\n===== COMBAT SHIPS =====");
const combatShips = fleet.getCombatShips();
for (const ship of combatShips) {
    console.log(ship);
}
// ==========================
// 9. LISTAR NAVES DE TRANSPORTE
// ==========================
console.log("\n===== CARGO SHIPS =====");
const cargoShips = fleet.getCargoShips();
for (const ship of cargoShips) {
    console.log(ship);
}
// ==========================
// 10. LISTAR NAVES DE EXPLORAÇÃO
// ==========================
console.log("\n===== EXPLORATION SHIPS =====");
const explorationShips = fleet.getExplorationShips();
for (const ship of explorationShips) {
    console.log(ship);
}
