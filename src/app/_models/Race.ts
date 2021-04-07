export class Race{
    idRace : any;
    nomRace: string;
    constructor(idRace,nomRace){
        this.idRace = idRace;
        this.nomRace = nomRace;
    }
}

export interface RaceExistant {
    nombre : number;
    race : string;
}