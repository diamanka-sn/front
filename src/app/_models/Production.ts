export interface productionLait {
    matin: any;
    soir: any;
    total: any;
    mois: number;
}

export interface productionTotale {
    total: any;
}

export interface phaseVache {
    nombre: number;
    periode: string;
    annee: any;
    mois: number;
}

export interface VenteLait {
    vente: number;
    annee: number;
}
export interface Stock {
    stock: any;
    annee: number;
}

export interface quantiteVendu {
    mois: number;
    annee: number;
    montant: any;
}
export interface quantiteTotal {
    total: number;
    annee: number;
    mois: number;
}

export interface venteMois {
    quantite: any;
    annee: number;
}
 

export interface VenteBovin {
    vente: number;
    annee: number;
    nombre : number;
}