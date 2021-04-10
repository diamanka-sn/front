export class listeDepense{
    type:string;
    libelle:string;
    montant:number;
    dateDepenses:Date;

    constructor(type,libelle,montant,dateDepenses){
        this.type = type;
        this.libelle = libelle;
        this.montant = montant;
        this.dateDepenses = dateDepenses;
    }
}

export interface achatBovin{
    prix:any;
    annee:number;
}

export interface typeDepense {
    annee:number;
    type:string;
    montant:number;
}

export interface depensesMensuelle {
    montant:any;
    annee:number;
}