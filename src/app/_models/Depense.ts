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