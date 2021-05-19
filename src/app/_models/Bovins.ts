export class Bovins {
  nom: string;
  situation: string;
  etatDeSante: string;
  idBovin: number;

  constructor(idBovin, nom, situation, etatDeSante) {
    this.idBovin = idBovin
    this.nom = nom;
    this.situation = situation;
    this.etatDeSante = etatDeSante;
  }
}

export interface Santebovin {
  nombre: number;
  sante: string;
}

export interface bovinMois {
  nombre: number;
  mois: any;
  annee: string;
}

export interface poidsBovin {
  poids : number;
  mois:number;
  annee:number;
}

export interface venteBovin {
  annee:number;
  vente:number;
}

export class listeSante {
  nom: string;
  maladie: string;
  date: Date; 
}