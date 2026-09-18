import { Resident } from "./Resident";
import { Room } from "./Room";

export class Vault{
    private room: Room[];
    private resident: Resident[];

    public constructor() {
        this.room = []
        this.resident = []
    }

    public createRoom(name: string, number: number, capacity: number) {
        //criar objeto room e jogar pra dentro do array de room
        const room1 = new Room("Sala A", 101, 4)
        this.room.push(room1)
    }

    public createResident() {
        //criar novo residente, jogar ele pra dentro do array de resident
    }

    public listResidents(){
        //mostrar todos os residentes
    }

    public listRooms(){
        //mostrar todas as rooms
    }

    public listResidentsFromRoom(){
        //mostrar todos os residentes de uma sala especifica
    }

    public allocateResident(){
        //alocar/realocar resident pra sala especifica
    }

}