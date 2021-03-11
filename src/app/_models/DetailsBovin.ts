export class DetailsBovin {
    idBovin: number;
    codeBovin: string;
    nom: string;
    dateNaiss: any;
    situation: string;
    etatDeSante: string;
    geniteur: string;
    genitrice: string;
    etat: string;
    nomRace: string;
    datePesee: any;
    poids: number;

    constructor(idBovin, codeBovin, nom, dateNaiss,
        situation, etatDeSante, geniteur, genitrice,
        etat, nomRace, datePesee, poids) {

        this.idBovin = idBovin
        this.codeBovin = codeBovin
        this.nom = nom;
        this.dateNaiss = dateNaiss;
        this.situation = situation;
        this.etatDeSante = etatDeSante;
        this.geniteur = geniteur;
        this.genitrice = genitrice;
        this.etat = etat;
        this.nomRace = nomRace;
        this.datePesee = datePesee;
        this.poids = poids;

    }
}