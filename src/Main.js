"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Registry_1 = require("./classes/Registry");
const FamilyFarmer_1 = require("./classes/FamilyFarmer");
const CommunityGardenProducer_1 = require("./classes/CommunityGardenProducer");
const Food_1 = require("./classes/Food");
const Institution_1 = require("./classes/Institution");
const ask = require("readline-sync");
const producer = new Registry_1.Registry();
const food = new Registry_1.Registry();
const institution = new Registry_1.Registry();
while (true) {
    console.log(`
========================================
     ROOTS OF THE EARTH COOPERATIVE
========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit
`);
    const choose = Number(ask.question("Choose an option: "));
    switch (choose) {
        case 1:
            const choose2 = Number(ask.question(`
What type of producer do you want to register?

[1] Family Farmer
[2] Community Garden Producer

Choose an option: `));
            switch (choose2) {
                case 1:
                    const name = ask.question("What's the producer's name? ");
                    const cpf = ask.question("What's the producer's CPF? ");
                    const quantity = Number(ask.question("How much food does the producer produce (kg)? "));
                    const propertySize = Number(ask.question("What is the property size (m²)? "));
                    const newProducer1 = new FamilyFarmer_1.FamilyFarmer(name, cpf, quantity, propertySize);
                    producer.add(newProducer1);
                    break;
                case 2:
                    const name2 = ask.question("What's the producer's name? ");
                    const cpf2 = ask.question("What's the producer's CPF? ");
                    const quantity2 = Number(ask.question("How much food does the producer produce (kg)? "));
                    const numberOfVolunteers2 = Number(ask.question("How many volunteers are there? "));
                    const newProducer2 = new CommunityGardenProducer_1.CommunityGardenProducer(name2, cpf2, quantity2, numberOfVolunteers2);
                    producer.add(newProducer2);
                    break;
            }
            break;
        case 2:
            const foodName = ask.question("What's the food's name? ");
            const category = ask.question("What's the food's category? ");
            const quantityKg = Number(ask.question("How much food is available (kg)? "));
            const producers = producer.list();
            for (let i = 0; i < producers.length; i++) {
                console.log(`[${i + 1}] ${producers[i].getName()}`);
            }
            const chooseProducer = Number(ask.question("Choose the responsible producer: "));
            const responsibleProducer = producers[chooseProducer - 1];
            const newFood = new Food_1.Food(foodName, category, quantityKg, responsibleProducer);
            food.add(newFood);
            break;
        case 3:
            const institutionName = ask.question("What's the institution's name? ");
            const address = ask.question("What's the institution's address? ");
            const numberOfPeopleServed = Number(ask.question("How many people does the institution serve? "));
            const newInstitution = new Institution_1.Institution(institutionName, address, numberOfPeopleServed);
            institution.add(newInstitution);
            break;
        case 4:
            const producers2 = producer.list();
            for (const item of producers2) {
                console.log(`
╔══════════════════════════════════════╗
║          PRODUCER INFORMATION        ║
╠══════════════════════════════════════╣
║ Name: ${item.getName()}
║ CPF: ${item.getCPF()}
╚══════════════════════════════════════╝
                `);
            }
            ask.question(`Press ENTER to go...`);
            break;
        case 5:
            const foods2 = food.list();
            for (const item of foods2) {
                item.AvailableQuantity();
            }
            ask.question(`Press ENTER to go...`);
            break;
        case 6:
            const institutions = institution.list();
            for (const item of institutions) {
                console.log(`
╔══════════════════════════════════════╗
║       INSTITUTION INFORMATION        ║
╠══════════════════════════════════════╣
║ Name: ${item.getName()}
║ Address: ${item.getAddress()}
║ People served: ${item.getNumberOfPeopleServed()}
╚══════════════════════════════════════╝
                `);
            }
            ask.question(`Press ENTER to go...`);
            break;
        case 7:
            const foods = food.list();
            const institutions2 = institution.list();
            for (let i = 0; i < foods.length; i++) {
                console.log(`[${i + 1}] ${foods[i].getName()}`);
            }
            const chooseFood = Number(ask.question("Choose the food: "));
            const selectedFood = foods[chooseFood - 1];
            for (let i = 0; i < institutions2.length; i++) {
                console.log(`[${i + 1}] ${institutions2[i].getName()}`);
            }
            const chooseInstitution = Number(ask.question("Choose the institution: "));
            const selectedInstitution = institutions2[chooseInstitution - 1];
            const quantityKg2 = Number(ask.question("How much food do you want to donate (kg): "));
            selectedInstitution.receiveFood(selectedFood, quantityKg2);
            break;
        case 0:
            console.log("Exiting the system...");
            process.exit(0);
    }
}
