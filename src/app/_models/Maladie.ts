export interface maladie {
    nombre: number
    maladie:string;
}

export interface bovinMalade {
    nom:string;
    maladie:string;
    date: Date;
}

export interface bovinGueri {
    nom:string;
    maladie:string;
    dateMaladie: Date;
    dateGuerison: Date;
}

export interface depenseSante {
    libelle:string;
    montant:number;
    date:Date;
    annee:number;
}

export interface chargeSante {
    sante:string;
    annee:number;
}